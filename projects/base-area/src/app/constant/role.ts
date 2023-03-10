export enum Role {
    R0001 ='Super Admin',
    R0002 ='Admin',
    R0003 ='Member'
}
export const RoleType: Record<Role, string> = {
    [Role.R0001]: "Super Admin",
    [Role.R0002]: "Admin",
    [Role.R0003]: "Member"
    
};