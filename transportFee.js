export default function transportFee(shift) {
    var result = "";
    switch (shift) {
      case "morning":
        result = "R20";
        break;
      case "afternoon":
        result = "R10";
        break;
      case "nightshift":
        result = "free";
        break;
      default:
        result = "invalid shift selected.";
    }
    return result;
  }
//   console.log(transportFee('morning'), 'R20');