import { SexEnum } from "@/enums";

export interface GetUserListRequestBody {
  PageIndex?: number;
  PageRows?: number;
  SortField?: string;
  SortType?: string;
  Search?: {
    all?: boolean;
    userId?: string;
    keyword?: string;
    userName?: string;
    roleId?: string;
  }
}

export interface SaveUserRequestBody {
  Id?: string;
  CreateTime?: string;
  CreatorId?: string;
  Deleted?: boolean;
  UserName?: string;
  Password?: string;
  RealName?: string;
  Sex?: SexEnum;
  Birthday?: string;
  DepartmentId?: string;
  OrgId?: string;
  State?: string;
  Remark?: string;
  newPwd?: string;
  RoleIdList?: string[];
}

export interface UserInfo {
  Id?: string;
  CreateTime?: string;
  CreatorId?: string;
  Deleted?: false,
  UserName?: string;
  Password?: string;
  RealName?: string;
  Sex?: SexEnum;
  Birthday?: string;
  DepartmentId?: string;
  OrgId?: string;
  State?: number;
  Remark?: string;
  RoleNames?: string;
  RoleIdList?: string[];
  RoleNameList?: string[];
  RoleType?: number;
  DepartmentName?: string;
  SexText?: string;
  BirthdayText?: string;
}

