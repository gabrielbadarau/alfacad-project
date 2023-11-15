## Alfacad Project

Personal app, build to be some sort of support tool for a company. It was meant to help the company organize meetings schedules, vacations and project distribution more effectively.

## Things to mention
- You can create / edit / delete meeting schedules with clients, vacations, projects and comments for projects.
- Some of the above permissions are enabled, some are disabled, based on the permission provided in Clerk Dashboard.
- Projects have automated comments built when you create or edit them. They can be seen in "Jurnal" of every project. You can also post custom comments.
- Projects ("Lucrari") have versioning, meaning if two users start to edit a project in the same time and one saves the project with new details, when the other user will try to submit his changes, he will be notified that there is a version conflict and that he needs to refresh the page (this popup appears beautifully in a Toast component)
- All the data that is shown, it's paginated on the server side (leveraging query strings), not on the client. (to reduce the load on the client side and only send the necessary data)

## Build 

I have used the following resources:

- Next v14 (App Router)
- Prisma
- PlanetScale Database
- ShadcnUi for UI design and components ( created some custom components for this like: range-date-picker, multi-user-select, time-picker )
- Clerk for managing authentication and users access
- Zod for state management
- React Hook Form for forms

You can check it out here: https://alfacad-project.vercel.app/


