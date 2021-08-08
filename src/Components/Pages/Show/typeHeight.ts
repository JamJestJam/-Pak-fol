import { boxEnum } from "../../../Types/box";

const typeHeight = (type: boxEnum) => {
  switch (type) {
    case boxEnum.B:
      return 8;
    case boxEnum.BC:
      return 5;
    case boxEnum.C:
      return 4;
    case boxEnum.E:
      return 2;
    case boxEnum.EB:
      return 5;
    case boxEnum.undef:
      return 0;
  }
};

export default typeHeight;
