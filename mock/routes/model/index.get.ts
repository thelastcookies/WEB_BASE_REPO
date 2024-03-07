import type {DataModel} from "../../../src/api/main-data/model/types";
import type {BaseResponseBody} from "../../../src/api/main-data";

export default eventHandler((): BaseResponseBody<DataModel[]> => {
    const data: DataModel[] = [{
        id: "10000001",
        modelName: "ORG_STR",
        modelAlias: "组织架构",
        modelState: 0,
        comment: "",
    }, {
        id: "10000002",
        modelName: "EMP_INFO",
        modelAlias: "员工信息",
        modelState: 1,
        comment: "",
    }];
    return {
        code: 200,
        msg: '获取成功',
        data,
    }
});