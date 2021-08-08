import { boxEnum } from "../../../Types/box";

const typeWidth = (type: boxEnum) => {
  switch (type) {
    case boxEnum.B:
      return 3;
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

export default typeWidth;
