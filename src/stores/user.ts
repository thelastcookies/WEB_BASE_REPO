import type { UserRecord } from "@/api/admin/user/types";

export const useUserStore = defineStore('user', () => {
  const userInfo = shallowRef({} as UserRecord);
  const userPerms = shallowRef([] as string[]);

  const getUserInfo = async () => {
    return new Promise<void | Error>((resolve, reject) => {
      // 获取用户信息
      getOperatorInfo().then(res => {
        if (!res.Success) {
          reject(new Error(WITH_UNAUTHORIZED));
        } else {
          userInfo.value = res.Data!.UserInfo;
          userPerms.value = res.Data!.Permissions;
          resolve();
        }
      }).catch(e => reject(e));
    });
  };

  const $reset = () => {
    userInfo.value = {};
    userPerms.value = [];
  };

  return {
    userInfo,
    userPerms,
    getUserInfo,
    $reset
  }
});

