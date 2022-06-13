// 문자열 리터럴 유니온으로 CSS 단위가 가질 수 있는 값을 설명
type Unit = "cm" | "px" | "%"

// 지원하는 단위를 나열
let units: Unit[] = ["cm", "px", "%"]

// 지원하는 단위 각각을 확인하고 일치하는 값이 없으면 null 반환
function parseUnit(value: string): Unit | null {
  for (let i = 0; i < units.length; i++) {
    if (value.endsWith(units[i])) {
      return units[i]
    }
  }
  return null;
}

type Width = {
  unit: Unit,
  value: number,
}

function parseWidth(width: number | string | null | undefined): Width | null {
  // width가 null이거나 undefined면 일찍 반환
  if (width == null) {
    return null;
  }

  // width가 숫자면 픽셀로 취급
  if (typeof width === 'number') {
    return { unit: 'px', value: width }
  }

  // width로부터 단위 파싱
  let unit = parseUnit(width)
  if (unit) {
    return { unit, value: parseFloat(width)}
  }

  // 이 외의 경우엔 null 반환
  return null
}
