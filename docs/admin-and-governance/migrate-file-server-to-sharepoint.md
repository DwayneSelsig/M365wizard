---
title: "From File Server To SharePoint: Copy Or Reorganize?"
sidebar_position: 7
roles: [KeyUser, IT]
level: intermediate
license: ""
tags: [admin, governance, sharepoint, migration, files]
accent: default
prereqs: []
---

# From File Server To SharePoint: Copy Or Reorganize?

Reorganize before you migrate. A file server is usually arranged around drives, folders, and inherited permissions. SharePoint works best when its structure reflects purpose, ownership, collaboration, access, and information lifecycle.

Plan the migration as an information and adoption project, with technology supporting the agreed working pattern.

## Recommended Approach

Do not migrate everything first and decide how to organize it afterward. Work in manageable areas, such as a department, process, or project. For each area, decide what to keep, who owns it, where it belongs, and how people will work after the move.

> Do not automatically move existing disorder to a new platform.

## Migration Flow

```mermaid
flowchart TD
    Scope[Set scope,<br/>capacity and owners] --> Assess[Inventory<br/>and scan]
    Assess --> Decide{Decision per<br/>work area?}
    Decide -->|Approved deletion| Delete[Do not<br/>migrate]
    Decide -->|Keep, rarely used| Archive[Approved archive<br/>or records storage]
    Decide -->|Personal work| OneDrive[OneDrive]
    Decide -->|Teamwork| Team[Teams-connected<br/>team site]
    Decide -->|Publish or control| SharePoint[SharePoint site<br/>or library]

    Archive --> Design[Design structure,<br/>access and lifecycle]
    OneDrive --> Design
    Team --> Design
    SharePoint --> Design
    Design --> Prepare[Prepare users<br/>and support]
    Prepare --> Pilot[Pilot and validate]
    Pilot -->|Issues found| Fix[Fix content<br/>or design]
    Fix --> Pilot
    Pilot -->|Accepted| Waves[Migrate in waves]
    Waves --> Cutover[Source read-only;<br/>validate final copy]
    Cutover --> Accept[Accept the<br/>cut-over]
    Accept --> Aftercare[Complete<br/>aftercare]
    Aftercare --> Retire[Retire the source]
```

## Reserve Time And Capacity

A schedule based only on file count and transfer speed is incomplete. The technical copy is only one part of the work. Reserve named people and working time for:

- inventory and content decision workshops;
- owners to review, reorganize, and approve their information;
- target structure, access, retention, and security design;
- remediation of files, links, identities, and application dependencies;
- pilot testing, feedback, and design changes;
- communication, task-based training, and instructions for each audience;
- cut-over validation, user support, and post-migration improvements.

These are planned project activities, not tasks for owners and Key Users to fit around their regular work. Agree on decision deadlines and escalation routes, and give each migration wave contingency for findings from the previous wave. Use the pilot to estimate the review and support effort; the number of files alone does not predict that effort.

If the people who understand the content have no scheduled capacity, the migration will wait for decisions even when the technology is ready.

## 1. Define Scope And Decision Rights

Start with the people who can make content decisions. A migration team cannot determine by itself whether an old contract may be deleted or whether a project folder should become a separate site.

For each migration area, assign:

- a **business owner** who decides what is needed and who should have access;
- a **migration lead** who plans scans, test runs, waves, and issue handling;
- an **IT or Microsoft 365 owner** who prepares destinations, identities, security, and support;
- a **records, legal, or security contact** when retention, confidentiality, or regulatory requirements apply.

Record the decision, approver, and date for deletion, archiving, destination, and exceptional access. This prevents technical staff from becoming the accidental owner of business information.

## 2. Inventory And Assess The Source

Use two complementary assessments. The business inventory explains what the content means; the technical scan shows what might fail or require remediation.

| Business inventory | Technical inventory |
| --- | --- |
| Owner and users | File and folder count |
| Purpose and document types | Total size and large files |
| Active, historical, or obsolete | Last modified date |
| Confidentiality and retention need | Path length, names, and file types |
| Required access | Existing source permissions |
| Business applications and processes | Links, macros, and other dependencies |

Treat existing permissions as evidence, not as the target design. Years of exceptions and individual access entries can hide the intended audience. Ask the owner to confirm who needs read, edit, or owner access in the new location.

[Microsoft Migration Manager can scan and assess file shares](https://learn.microsoft.com/en-us/sharepointmigration/mm-fileshare-scan-assess) and produce summary reports and detailed logs before migration. Use those results to find technical blockers, but do not expect a scan to decide ownership, value, or retention for you.

### Check The Intended Target

Check whether the source files meet the destination requirements, including the planned site and library paths:

- [ ] The complete decoded target path, including the file name, is no longer than 400 characters.
- [ ] Each file is within the 250 GB upload limit. Check the chosen migration tool's limits separately.
- [ ] Names pass the current restrictions for invalid characters and reserved names, such as `CON` and `NUL`.
- [ ] Count unique permission scopes, where content has its own access rules instead of inheriting them. SharePoint supports 50,000 per list or library; Microsoft's general recommendation is 5,000. Prefer far fewer exceptions.

The path, size, and supported permission limits come from [SharePoint service limits](https://learn.microsoft.com/en-us/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-limits). Check [OneDrive and SharePoint name restrictions](https://support.microsoft.com/en-us/onedrive/restrictions-and-limitations-in-onedrive-and-sharepoint) before setting rename rules. A supported maximum is not a design target.

The 5,000-item List View Threshold is a separate query threshold, not a hard folder capacity. Test indexed columns and filtered views with realistic volumes, following [Microsoft's List View Threshold guidance](https://support.microsoft.com/en-us/sharepoint/data-and-lists/working-with-the-list-view-threshold-limit-for-all-versions-of-sharepoint). Use [SharePoint 5,000 Item View Threshold Explained](../../blog/sharepoint-5000-item-view-threshold-explained) for the differences between views, search, synchronization, and automation.

### Set Migration Tool Acceptance Criteria

Choose a tool against the migration requirements. Require evidence that it can:

- scan without copying and export detailed findings;
- map sources to destinations and support the approved restructuring;
- map identities and permissions, with documented handling of unsupported rules;
- run initial and incremental copies with predictable handling of existing or changed files;
- report failures, support retries, and account for expected, migrated, and excluded content.

Prove these requirements in the pilot. Record manual steps and unsupported cases, with an owner and an agreed solution, before accepting the tool for wider use.

### Distinguish User Data From Application Data

First check who uses the information: a person, an application, or both. Then choose the new storage location. The file type and current folder alone do not tell you enough.

| Use pattern | Excel example | What to arrange |
| --- | --- | --- |
| User data: people use the information themselves | A team edits a budget and discusses the figures | Choose shared storage. Assign an owner and show the team how to use it |
| Application data: software reads or writes data in the file | An application imports an Excel file. A user may start the import manually | Test whether the application can find, open, and process the file |
| Mixed use: people and applications use the same file | Staff enter data in a workbook. Another workbook, macro, or application uses that data | Test all files, links, and processing steps involved |

User data can also belong to a team. Check before putting team files in one person's OneDrive. An Excel file can be used by both people and applications.

You can teach users where to find their files after the move. For applications, you need to update fixed paths. Sometimes you also need to change or replace the application. Then test whether the whole process still works.

Excel can use [links to other workbooks in SharePoint and OneDrive](https://support.microsoft.com/en-us/excel/create-workbook-links). It can also retrieve data from files through the [Power Query SharePoint Folder connector](https://learn.microsoft.com/en-us/power-query/connectors/sharepoint-folder). Other applications cannot always do this.

Include the organization's Excel version, workbook links, queries, macros, and imports in the process tests below.

### Check How The Application Signs In

On a Windows file share, an application can often use the signed-in user's account. This can work through [Kerberos authentication](https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview). A service or scheduled task may use a different account. Record which account reads and writes each file.

Access in the browser tells you little about access from an application. The application cannot automatically use your browser's sign-in cookies. It must support a way to sign in, for example through a connector. It also needs the right permissions.

Access through [Microsoft Graph](https://learn.microsoft.com/en-us/graph/auth/auth-concepts) requires an access token. An application can act on behalf of a signed-in user (delegated access) or use its own identity (app-only access). Check which method the application supports.

:::warning[Prevent Unplanned Synchronization Workarounds]

If an application cannot open files in SharePoint, users may start synchronizing them. The application then uses a local copy. Work can become dependent on one staff member, computer, and sync client.

Have the application owner and IT approve this approach before the move. Check the security of the device and files. Agree on how to keep files up to date and restore them if needed. Also check whether work can continue without that staff member or computer. Follow the [controls for synchronization and local data](#5-control-synchronization-and-local-data-risk).

:::

With approved synchronization, the sync client signs in to SharePoint. The application uses the local copy and gains no direct access to SharePoint. Include the time needed for changes to reach the next processing step in the process test.

### Map Work Process Dependencies

Check both Office and non-Office applications. Some need a local or mapped path, a fixed folder name, or a service account. An application may also need to lock a file while it edits it. A sync client can sometimes provide a local path.

Trace each critical process from task to application, file, identity, and path. Test the complete task with the real Office or non-Office application. Opening the migrated file alone does not prove that linked files, imports, or background processing work.

Apply the same assessment to services, integrations, databases, and shared application data. Check their sign-in method, access requirements, and concurrent use before choosing cloud access, approved synchronization, or another storage design.

```mermaid
flowchart TD
    Process[Name the task<br/>and owner] --> Use{Supported<br/>cloud access?}
    Use -->|Yes| Cloud[Test cloud access]
    Use -->|No| Local{Supported<br/>sync path?}
    Local -->|Yes| Sync[Test sync, paths<br/>and file locking]
    Local -->|No| Redesign[Redesign, replace<br/>or retain temporarily]
    Cloud --> Task[Test the<br/>whole process]
    Sync --> Task
    Redesign --> Plan[Assign owner<br/>and transition plan]
    Plan --> Task
    Task -->|Pass| Approve[Approve for<br/>migration]
    Task -->|Fail| Block[Do not<br/>cut over]
```

Complete this checklist before scheduling the affected migration wave:

- [ ] Name the process owner, users, criticality, and acceptable outage.
- [ ] Record every application, automation, macro, integration, service account, and scheduled task that reads or writes the files.
- [ ] Record who uses each file: people, applications, or both. Note which other files depend on it.
- [ ] Record mapped drives, fixed paths, shortcuts, input folders, output folders, and embedded links.
- [ ] Record the account or application identity used by each application or task. Check how it signs in and which permissions it needs.
- [ ] Test concurrent use, file locking, offline use, Files On-Demand, and the target path with the real application.
- [ ] Choose and approve one outcome: use the browser, use a supported synchronized path, change the application, replace the process, or keep the dependency on managed storage temporarily.
- [ ] Have the application owner and IT approve any use of synchronization. Check device security, up-to-date files, and how work continues without the usual user or device.
- [ ] Define monitoring, support, rollback, and a date for removing any temporary exception.

## 3. Choose The Destination

Choose a destination for each coherent work area, not for the entire drive at once.

| Information pattern | Recommended destination |
| --- | --- |
| Work files owned by one person and not yet part of a team process | OneDrive |
| Documents that a defined group actively creates and maintains | A Teams-connected SharePoint team site |
| Published reference information for a broad audience | A SharePoint communication site |
| Formal documents with a defined process, owner, and access model | A governed SharePoint site or document library |
| Application data or files used by both people and applications | Test the whole process first. Use SharePoint if the application supports it, or storage designed for the application. If you keep files elsewhere temporarily, assign an owner and an end date |
| Information that must be retained but is rarely used | An approved records or archive solution based on retention and access requirements |
| Obsolete, duplicate, or ownerless content with approved disposal | Do not migrate it |

OneDrive, Teams, and SharePoint are not interchangeable folders. The destination determines ownership, lifecycle, access, and how people find and use the content. See [Where Should This File Live?](../decisions/where-should-this-file-live.md) for the underlying choice.

Use a governed communication site or nongroup-connected SharePoint site when the organization must centrally manage publication, membership, or access. Use a group-connected team site when a defined group should collaborate and its owners can be accountable for membership. SharePoint does not keep ownership central by itself; the site type, groups, owners, and sharing settings create that operating model. Follow [Govern Sharing In SharePoint](./govern-sharing-in-sharepoint.md) before selecting the final destination.

:::warning[Archive Is A Lifecycle Decision]

Do not call content an archive merely because nobody uses it. Confirm its owner, required retention period, access needs, legal holds, and approved disposal process. Configure [Microsoft Purview retention for SharePoint and OneDrive](https://learn.microsoft.com/en-us/purview/retention-policies-sharepoint) where policy or regulation requires it.

Use [Which Microsoft Purview Solution Should You Use?](../decisions/which-purview-solution-should-you-use.md) when migration decisions also require sensitivity labels, DLP, records, evidence, or investigation controls.

:::

## 4. Design The New Structure And Access

Do not automatically turn every top-level folder into a site. Create a site when content shares a clear purpose, owner, audience, and lifecycle. Use a separate site when the security boundary or ownership is materially different.

Use [Site, Library, Or Folder: Where Should You Organize Documents?](../decisions/site-library-or-folder.md) to work through this design before creating migration destinations.

Within a site:

- use document libraries for distinct content sets or management rules;
- keep folders understandable and reasonably shallow;
- add metadata when people need to filter, group, search, or manage documents across folders;
- prefer groups and inherited permissions over individual access and many exceptions;
- define at least two suitable owners for important workspaces;
- agree on naming, navigation, versioning, sharing, retention, and review before migration.

Make the structure explainable to a new employee without relying on knowledge of the old drive.

### Govern Membership And Access

:::warning[Verify Access Previously Blocked By Deny]

The [SharePoint Migration Tool permission guidance](https://learn.microsoft.com/en-us/sharepointmigration/understanding-permissions-when-migrating) states that special permissions such as NTFS Deny are not preserved. A user excluded on the source could gain access through another permission on the destination. Verify other tools' behavior separately.

Record these exclusions and have the business owner approve the replacement access design. In the pilot, test that excluded users cannot open the affected content.

:::

:::warning[Keep Membership Correct When Roles Change]

File-server access is often based on groups maintained by IT or identity management. A group-connected SharePoint team site or Team can let workspace owners manage membership. If that membership does not follow an authoritative joiner, mover, and leaver process, a role change can leave someone without required access or with access that should have ended.

Assign who updates membership for each event, which identity source they use, and who checks that the change is complete.

:::

For every destination, record whether membership is centrally managed, owner-managed, or hybrid. Name the business owner, at least two workspace owners, the identity source, the approver, the exception route, and the review date. Use [Permissions And Ownership](./permissions-and-ownership.md) for the responsibility model. Check Microsoft's [sharing and permissions guidance](https://learn.microsoft.com/en-us/sharepoint/modern-experience-sharing-permissions) for membership management in group-connected sites and Teams.

Review all access paths. Direct file or folder sharing can create unique SharePoint permissions, and private or shared Teams channels use separate SharePoint sites. Check members, guests, sharing links, direct access, and channel sites separately. Follow [Govern Sharing In SharePoint](./govern-sharing-in-sharepoint.md) and Microsoft's [Teams and SharePoint integration guidance](https://learn.microsoft.com/en-us/sharepoint/teams-connected-sites).

### Review Broad Access Before Copilot

Microsoft 365 Copilot respects existing permissions, but it can make accessible information easier to find and reuse. Before a broad rollout, correct oversharing, ownerless content, and obsolete access. Microsoft's [secure and governed data foundation for Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/secure-govern-copilot-foundational-deployment-guidance) explains the preparation.

Use Purview to discover, classify, and protect sensitive information. Labels do not replace access remediation, and a site or group label does not automatically label the files inside it. Check the [scope of sensitivity labels for groups and sites](https://learn.microsoft.com/en-us/purview/sensitivity-labels-teams-groups-sites).

Check for `Everyone except external users` access at site, library, folder, and file level. Have owners confirm where organization-wide access is intended and remove it elsewhere. Microsoft's [data access governance reports](https://learn.microsoft.com/en-us/sharepoint/data-access-governance-reports) can help identify broad sharing; check the reporting prerequisites before using them.

During a permissions review, consider [Restricted Content Discovery](https://learn.microsoft.com/en-us/sharepoint/restricted-content-discovery) for selected sensitive sites. It temporarily limits discovery in organization-wide search and Copilot. It does not change permissions or prevent direct access by an authorized user. Check the current licensing and administrative prerequisites, assign a review owner, and remove the restriction after access remediation is accepted.

## 5. Control Synchronization And Local Data Risk

Oversharing can expose information to unintended people. Synchronization can also affect the files themselves: [OneDrive synchronizes additions, changes, and deletions](https://support.microsoft.com/en-us/onedrive/sync-your-computer-s-files-and-folders-with-onedrive) between the device and the cloud. An accidental deletion, destructive application, or compromised device can therefore affect the shared cloud copy and other synchronized devices. Treat synchronization as an access method, not as a backup.

| Risk | What can happen | Required design response |
| --- | --- | --- |
| Oversharing | Broad membership, direct permissions, or links expose information to unintended people | Remediate access and follow [Govern Sharing In SharePoint](./govern-sharing-in-sharepoint.md) |
| Local exposure | Locally available or always-available files can be read through an unlocked or compromised user session | Require managed device controls, disk encryption, screen locking, incident response, and appropriate download restrictions |
| Propagated deletion or damage | A synchronized deletion or modification can reach SharePoint and other devices | Configure versioning and [recovery options](https://learn.microsoft.com/en-us/sharepoint/safeguarding-your-data), and test the recovery procedure |
| Excessive synchronization | Large libraries, too many synchronized items, or widespread offline copies can affect storage, network use, and sync reliability | Synchronize only what the work pattern requires, use Files On-Demand, and test against the [current OneDrive and SharePoint limits](https://support.microsoft.com/en-us/onedrive/restrictions-and-limitations-in-onedrive-and-sharepoint) |
| Incompatible process | An application expects a mapped drive, fixed path, locking behavior, or local data file | Resolve the dependency before cut-over or keep an explicitly managed temporary exception |

[Files On-Demand](https://support.microsoft.com/en-us/onedrive/save-disk-space-with-onedrive-files-on-demand-for-windows) can keep file contents online until needed. Users can make files always available, and applications can download online-only files when they access them. Treat this as a storage and synchronization control, not a security boundary.

SharePoint permissions do not by themselves protect every downloaded copy. Require managed and compliant devices, device encryption, strong sign-in and locking, and appropriate [controls for unmanaged devices](https://learn.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices).

When the information risk and licensing justify them, add Purview sensitivity labels with encryption, [protection that extends SharePoint permissions to downloaded files](https://learn.microsoft.com/en-us/purview/sensitivity-labels-sharepoint-extend-permissions), or [Endpoint DLP](https://learn.microsoft.com/en-us/purview/endpoint-dlp-learn-about). A classification-only label does not stop someone using an authorized, unlocked session from reading the file.

Before enabling synchronization for a site or library:

- [ ] Approve which roles need synchronization and which libraries they need.
- [ ] Keep Files On-Demand as the normal pattern and document justified offline exceptions.
- [ ] Check item counts, path lengths, available storage, bandwidth, and the current synchronization limits.
- [ ] Confirm the device-management, encryption, lock, remote-action, and unmanaged-device requirements.
- [ ] Decide whether sensitive files need encryption, extended protection on download, Endpoint DLP, or a no-download pattern.
- [ ] Test deletion, version restore, recycle-bin recovery, and the incident escalation route.
- [ ] Include removal of synchronized data and access in the leaver, lost-device, and device-replacement processes.

## 6. Clean Up And Remediate

Have the business owner approve whether content should be migrated, archived, or deleted. Investigate content that:

- is duplicated, obsolete, or has no owner;
- has not been used within the agreed review period;
- cannot be opened or is password protected;
- depends on mapped drives, fixed paths, shortcuts, macros, or applications;
- has names, types, sizes, or paths reported as migration issues;
- has permissions that cannot be mapped to active Microsoft 365 identities.

Do not use last modified date as the only deletion rule. Some records are rarely opened but must still be retained. Conversely, a recently modified duplicate is not necessarily valuable.

After remediation, scan again against the approved destination. Renaming or moving a folder changes the target paths of its contents and can affect dependencies. Keep the updated findings with the migration wave's decisions. Resolve blockers or approve a different destination before scheduling the copy.

## 7. Prepare Users And Practice The New Working Pattern

Prepare people before each migration wave. Explain why the work is changing, where documents will belong, which old habits must change, and what users can expect during the transition. Use the agreed structure and access rules in the training. Show where the team's existing documents belong in the new structure.

Name an adoption lead who coordinates training, instructions, and feedback with the migration lead. Reserve preparation, practice, and support time for local Key Users or champions. Ask managers to make that time available and explain the agreed working pattern to their teams. Microsoft's [champion resources](https://learn.microsoft.com/en-us/office365/customlearning/champ_getstarted) can help organize this local support.

Set learning goals for each audience:

| Audience | What to practice |
| --- | --- |
| End users | Find and save documents in the right place, edit together, share a link, check who has access, and restore an earlier version. Recognize when synchronization is approved and how to request help |
| Key Users and workspace owners | Coach colleagues, maintain useful metadata and views, handle membership within their authority, and escalate access or content decisions |
| IT and service desk | Diagnose missing access and sync problems, use recovery procedures, and route application or security incidents to the right owner |

Before cut-over, let representative users practice their real tasks in the configured destination with their normal permissions. Use representative content with approved access. Make the exercises follow the [document collaboration working pattern](../scenarios/collaborate-on-documents.md). Record where users get stuck and change the instructions or design before repeating the test.

At cut-over, provide short task instructions, the new locations, and a named support route. During aftercare, offer drop-in sessions, repeat exercises where needed, and collect questions through one agreed channel. The adoption lead should review these with Key Users and IT so recurring problems lead to a correction in training, configuration, or the working pattern.

Check readiness through tasks users can complete independently. Attendance alone does not show that a team can work in the new location. Resolve learning or usability problems that prevent essential work before cut-over. Give other problems an owner, an agreed solution, and a follow-up date.

## 8. Pilot With A Representative Group

Choose a pilot that contains realistic complexity: folders, Office files, special permissions, links, larger files, and users with different working patterns. A technically easy folder proves very little.

Validate these four areas:

**Content And Migration Results**

- [ ] Compare the inventory, approved exclusions, expected content, migrated content, and failures. Record the reasons for differences and obtain the business owner's approval.
- [ ] Confirm that the tool meets the agreed scan, mapping, restructuring, incremental-copy, retry, and reporting requirements.
- [ ] Test names, paths, and representative documents in the intended browser, Teams, or synchronization workflow.

**Access And Protection**

- [ ] Verify the expected access for owners, members, visitors, and approved exceptions.
- [ ] Run the required negative access tests for former members, role changers, expired guests, obsolete direct permissions, and old sharing links.
- [ ] Test source Deny exclusions and unintended `Everyone except external users` access with the affected accounts.
- [ ] Test managed- and unmanaged-device behavior and applicable Purview protection with representative sensitive files.

**Applications And Processes**

- [ ] Test Word, PowerPoint, and Excel, including external links and macros.
- [ ] Run critical non-Office applications through their complete business tasks.
- [ ] Test manual work, file imports, linked Excel workbooks, and background tasks where used. Use the account or application identity that will do the work after the move.
- [ ] Change a value in a source file and check the result after import, refresh, and further processing. Do not rely on old saved values.
- [ ] Enable OneDrive synchronization only for the approved working pattern. Test Files On-Demand, offline use, item volume, deletion, and recovery.
- [ ] Obtain application-owner and IT approval for application use of synchronization. Demonstrate that work continues without the usual user or device.

**Users And Support**

- [ ] Test search, metadata, views, navigation, sharing, and approval processes.
- [ ] Have representative users complete their key tasks independently. Assign owners and solutions for remaining non-blocking learning or usability problems.
- [ ] Make task instructions available and confirm that users know where to request help.
- [ ] Confirm who provides support at cut-over and how they handle access, synchronization, and application problems.
- [ ] Agree on rollback criteria, the decision maker, and the recovery procedure.
- [ ] Record the business owner's and IT owner's pilot acceptance.

Do not cut over with unintended access, failed critical processes, users unable to complete essential tasks, or missing support and rollback arrangements. Resolve these blockers first. Only accept other issues with named owners and agreed end dates.

[Microsoft's file share migration guidance](https://learn.microsoft.com/en-us/sharepointmigration/fileshare-to-odsp-migration-guide) recommends an incremental pilot followed by a cut-over. Use the pilot findings to update the destination design, remediation rules, communications, and wave plan before scaling up.

## 9. Migrate In Waves And Cut Over

Migrate by work area so that each wave has an accountable owner and a known audience. Plan three decisions for each wave: accept the cut-over, complete aftercare, and retire the source.

1. The owner approves the content list, destination, and access model.
2. IT resolves scan findings, rescans, and prepares the destination.
3. The migration team performs an initial or incremental copy.
4. Users practice and validate the destination before the agreed deadline.
5. The source becomes read-only and the team migrates the final changes.
6. The team compares the inventory with the results and validates permissions, critical files, and business processes. The owner approves documented differences.
7. The business owner and IT accept the cut-over against the criteria below. Users switch to Microsoft 365 and aftercare starts.

Publish the cut-over time, write-freeze rules, new locations, support route, and rollback criteria in advance. Resolve blockers before switching users. Avoid leaving both locations writable; duplicate working copies make it unclear which version is authoritative.

Name the aftercare lead, service desk contact, local Key Users, and escalation owners before cut-over. Prepare short support instructions for missing access and sync problems, including checks before retrying and when to escalate. Schedule a review of recurring questions, unresolved defects, and training needs.

Agree on a read-only period for the old share, its access rules, and a retirement decision date. Base the period on validation, operational, and retention needs. Keep the source read-only through aftercare and until retirement is approved. A read-only source does not replace backup or the recovery plan.

## Definition Of Done

Record each of the following decisions separately. Unintended access or a failed critical process blocks acceptance. Other issues need an owner, an agreed solution, and an end date.

### Accept The Cut-Over

- [ ] The business owner has approved the content, structure, and destination. The migration results match the inventory and approved exclusions, or the owner has approved documented differences.
- [ ] Access tests pass. The membership source, sharing model, workspace owners, access-review owner, exception route, and review dates are recorded.
- [ ] Critical links, applications, and complete business tasks pass their tests or have been replaced by tested alternatives.
- [ ] Representative users complete essential tasks independently. Training and task instructions are available for the affected users.
- [ ] IT has confirmed retention, recovery, device protection, and rollback arrangements.
- [ ] The service desk and aftercare team are available with support instructions, escalation owners, and a scheduled review.
- [ ] The source is read-only and Microsoft 365 is the agreed working location.

### Complete Aftercare

- [ ] The scheduled review has taken place. The team has addressed recurring support problems and provided further training where needed.
- [ ] Operational owners have accepted the remaining non-blocking issues, with named owners, solutions, and end dates.
- [ ] The aftercare lead and service owner have approved the handover to regular support, including instructions, recovery procedures, responsibilities, and review dates.

### Retire The Source

- [ ] Aftercare is complete. The business owner and IT have confirmed that required records, legal holds, and recovery needs are covered before retiring the source.
- [ ] The retirement decision, executor, and date are recorded. Critical links and processes no longer depend on the old share.
- [ ] The old location has been retired according to the approved plan.

Measure success by findability, correct access, owner acceptance, process continuity, and reduced use of the file server. Copied item counts are only part of the evidence.

:::warning[Common Migration Mistakes]

- Copying everything one-to-one.
- Creating a site for every top-level folder.
- Reviewing permissions only after migration.
- Assuming that SharePoint keeps access centrally managed without configuring ownership, membership, and sharing.
- Leaving old and new storage writable for too long.
- Missing Excel links, macros, shortcuts, and application dependencies.
- Treating adoption as an afterthought, so users lack a clear new working pattern and fall back to the file server or local copies.
- Making only the technical migration partner accountable.
- Treating copied item count as the definition of success.

:::

## Official Microsoft Documentation

- [Overview of Migration Manager for file shares](https://learn.microsoft.com/en-us/sharepointmigration/mm-get-started)
- [Scan and assess file shares with Migration Manager](https://learn.microsoft.com/en-us/sharepointmigration/mm-fileshare-scan-assess)
- [File and folder permissions when using the SharePoint Migration Tool](https://learn.microsoft.com/en-us/sharepointmigration/understanding-permissions-when-migrating)
- [Microsoft's file share migration planning guide](https://learn.microsoft.com/en-us/sharepointmigration/fileshare-to-odsp-migration-guide)
- [Information architecture in modern SharePoint](https://learn.microsoft.com/en-us/sharepoint/information-architecture-modern-experience)
- [Retention for SharePoint and OneDrive](https://learn.microsoft.com/en-us/purview/retention-policies-sharepoint)
- [SharePoint service limits](https://learn.microsoft.com/en-us/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-limits)
- [Working with the List View Threshold](https://support.microsoft.com/en-us/sharepoint/data-and-lists/working-with-the-list-view-threshold-limit-for-all-versions-of-sharepoint)
- [Data access governance reports](https://learn.microsoft.com/en-us/sharepoint/data-access-governance-reports)
- [Restricted Content Discovery prerequisites and behavior](https://learn.microsoft.com/en-us/sharepoint/restricted-content-discovery)
- [Microsoft 365 champion resources](https://learn.microsoft.com/en-us/office365/customlearning/champ_getstarted)
- [Create workbook links in Excel](https://support.microsoft.com/en-us/excel/create-workbook-links)
- [Power Query SharePoint Folder connector](https://learn.microsoft.com/en-us/power-query/connectors/sharepoint-folder)
- [Kerberos authentication in Windows Server](https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview)
- [Microsoft Graph authentication and authorization](https://learn.microsoft.com/en-us/graph/auth/auth-concepts)
- [Teams and SharePoint integration](https://learn.microsoft.com/en-us/sharepoint/teams-connected-sites)
- [Secure and govern Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/secure-govern-copilot-foundational-deployment-guidance)
- [Use sensitivity labels for groups and sites](https://learn.microsoft.com/en-us/purview/sensitivity-labels-teams-groups-sites)
- [Sync files between a computer and OneDrive](https://support.microsoft.com/en-us/onedrive/sync-your-computer-s-files-and-folders-with-onedrive)
- [Restrictions and limitations in OneDrive and SharePoint](https://support.microsoft.com/en-us/onedrive/restrictions-and-limitations-in-onedrive-and-sharepoint)
- [Save disk space with OneDrive Files On-Demand](https://support.microsoft.com/en-us/onedrive/save-disk-space-with-onedrive-files-on-demand-for-windows)
- [Control SharePoint and OneDrive access from unmanaged devices](https://learn.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices)
- [Extend SharePoint permissions to downloaded documents](https://learn.microsoft.com/en-us/purview/sensitivity-labels-sharepoint-extend-permissions)
- [Learn about Endpoint Data Loss Prevention](https://learn.microsoft.com/en-us/purview/endpoint-dlp-learn-about)
- [Safeguarding data in SharePoint and OneDrive](https://learn.microsoft.com/en-us/sharepoint/safeguarding-your-data)

## Related Guides

- [Where Should This File Live?](../decisions/where-should-this-file-live.md)
- [Site, Library, Or Folder: Where Should You Organize Documents?](../decisions/site-library-or-folder.md)
- [Which Microsoft Purview Solution Should You Use?](../decisions/which-purview-solution-should-you-use.md)
- [Microsoft Purview](../services/purview.md)
- [SharePoint Content: Sites, Libraries, Lists, And Permissions](../services/sharepoint/sharepoint-content-structure.md)
- [Permissions And Ownership](./permissions-and-ownership.md)
- [Govern Sharing In SharePoint](./govern-sharing-in-sharepoint.md)
- [Collaborate On Documents](../scenarios/collaborate-on-documents.md)
