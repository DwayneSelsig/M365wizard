---
title: Somtoday To Microsoft School Data Sync
sidebar_position: 3
roles: [IT]
level: intermediate
license: ""
tags: [tool, school-data-sync, teams, education, somtoday]
accent: default
prereqs: []
---

# Somtoday To Microsoft School Data Sync

Somtoday To Microsoft School Data Sync is a Windows utility that creates Microsoft School Data Sync CSV files from Somtoday Connect data.

Use it when a school uses [Somtoday](https://www.somtoday.nl) as its student information system and needs to prepare CSV files for Microsoft School Data Sync because a direct OneRoster connection is not available.

## Best For

- Schools that use Somtoday and Microsoft 365 Education.
- IT teams that need to prepare SDS CSV files for Teams class and education scenarios.
- Schools that want to schedule a controlled export from Somtoday Connect.
- Tenants that need SDS v1 or SDS v2.1 CSV output before uploading data to School Data Sync.

## Do Not Use It For

- A direct SDS OneRoster connection that already works with the school's provider.
- Environments where student, teacher, or guardian data cannot be handled under a clear data governance process.
- A fully managed vendor integration. This is an open source bridge that IT must own, monitor, and update.

## Data Flow

The tool reads data from Somtoday Connect, generates CSV files, and stores them in a configured output folder. 

Use this flow:

1. Configure Somtoday Connect credentials and the school UUID.
2. Run the utility on a secured Windows host.
3. Review the generated CSV files.
4. Upload or automate the CSV import into School Data Sync.
5. Monitor SDS validation, user matching, classes, and enrollments after each run.

## Configuration

Configure the tool in `SomtodayOpenAPI2MicrosoftSchoolDataSync.exe.config`.

Important settings include:

- **SomOmgeving**: use `TEST` or `PROD`.
- **BooleanFilterBylocation** and **IncludedLocationCode**: choose whether to include all locations or only selected location codes.
- **SchoolUUID**: the organization UUID from Somtoday.
- **ClientId** and **ClientSecret**: Somtoday Connect credentials.
- **OutputFolder**: where the generated CSV files are written.
- **SeperateOutputFolderForEachLocation**: whether each location gets its own output folder.
- **OutputFormatUsernameTeacher** and **OutputFormatUsernameStudent**: which Somtoday value should match users in Microsoft 365.
- **EnableGuardianSync**: whether parent or guardian CSV files are generated.
- **ClearCsvAtYearEnd**: whether existing CSV files are cleared on July 31.
- **SdsCsvVersion**: choose SDS CSV format `1` or `2`.

Keep secrets out of shared folders and documentation. Treat the configuration file as sensitive because it contains credentials and controls student data export.

## Deploy It

1. Download the ZIP package from the [Somtoday To Microsoft School Data Sync releases page](https://github.com/DwayneSelsig/SomtodayOpenAPI2MicrosoftSchoolDataSync/releases).
2. Extract the files on a secured Windows server or management workstation.
3. Request Somtoday Connect access through the Somtoday Connect partner process.
4. Configure the `.exe.config` file with the test environment first.
5. Run the utility manually and review the generated CSV files.
6. Validate the CSV files against the SDS format your tenant will use.
7. Create a scheduled task after the test run is reliable. The source project notes that synchronization of student data from Somtoday is only allowed at night.
8. Upload the generated files to School Data Sync or use an approved automation process.

## Governance And Support

School Data Sync handles sensitive education data. Microsoft notes that connecting institution data to SDS means the organization is authorized to share that data with Microsoft and must follow its data governance standards.

Assign clear owners:

- **Education data owner**: decides which school data may be synchronized.
- **Somtoday admin**: manages source data quality and Somtoday Connect access.
- **Microsoft 365 admin**: owns SDS configuration, Teams class behavior, and Entra user matching.
- **Technical server admin**: owns the Windows host, scheduled task, logs, credentials, releases, and incident response.

Be especially careful with guardian data. The tool can generate extra CSV files for parent or guardian information. Review whether that data should be synchronized before enabling it, and confirm how guardian communication features are governed in Teams and School Data Sync.

## Operations

Monitor Windows Event Viewer for utility status. Also monitor SDS validation results after upload, because valid CSV files can still produce data quality or matching warnings inside SDS.

Known operational behaviors from the source project:

- Lesson groups for the current school year are retrieved.
- Lesson groups without a teacher are not processed.
- Lesson groups without a student are not processed.
- Group IDs are based on the location abbreviation.
- Invalid characters are replaced before CSV output.

## Source And Documentation

- [Somtoday To Microsoft School Data Sync on GitHub](https://github.com/DwayneSelsig/SomtodayOpenAPI2MicrosoftSchoolDataSync)
- [Current releases](https://github.com/DwayneSelsig/SomtodayOpenAPI2MicrosoftSchoolDataSync/releases)
- [Connect data to School Data Sync](https://learn.microsoft.com/en-us/schooldatasync/connect-data)
- [SDS v2.1 CSV file format](https://learn.microsoft.com/en-us/schooldatasync/sds-v2.1-csv-file-format)
- [SDS v1 CSV file format](https://learn.microsoft.com/en-us/schooldatasync/sds-v1-csv-file-format)

## Related Guides

- [Teams](../services/teams.md)
- [Entra ID](../services/entra-id.md)
- [Permissions And Ownership](../admin-and-governance/permissions-and-ownership.md)
