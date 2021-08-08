import { boxEnum } from "../../../Types/box";

const typeHeight = (type: boxEnum) => {
  switch (type) {
    case boxEnum.B:
      return 8;
    case boxEnum.BC:
      return 15;
    case boxEnum.C:
      return 10;
    case boxEnum.E:
      return 6;
    case boxEnum.EB:
      return 12;
    case boxEnum.undef:
      return 0;
  }
};

export default typeHeight;
