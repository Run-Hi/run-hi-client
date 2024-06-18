const fontGenerator = (
    weight: number,
    size: number,
    lineHeight: number,
    letterSpacing: number
) => ({
    fontFamily: `Pretendard-Bold`,
    fontWeight: weight,
    fontSize: `${size}rem`,
    lineHeight: `${lineHeight}%`,
    letterSpacing: `${letterSpacing}px`,
});

const font = {
    PRETENDARD_D1: fontGenerator(700, 4.5, 130, -1.5),
    PRETENDARD_D2: fontGenerator(700, 3.75, 130, -0.5),
    PRETENDARD_D3: fontGenerator(700, 3, 130, 0),
    PRETENDARD_D4: fontGenerator(700, 2.75, 130, 0),
    PRETENDARD_D5: fontGenerator(700, 2.5, 130, 0),

    PRETENDARD_H1: fontGenerator(700, 2.25, 140, 0.25),
    PRETENDARD_H2: fontGenerator(700, 1.75, 140, 0),
    PRETENDARD_H3: fontGenerator(600, 1.5, 140, 0.15),
    PRETENDARD_H4: fontGenerator(600, 1.25, 140, 0.15),
    PRETENDARD_H5: fontGenerator(600, 1.125, 140, 0.15),
    PRETENDARD_H6: fontGenerator(600, 1, 140, 0.15),

    PRETENDARD_p1: fontGenerator(400, 1.125, 140, 0.15),
    PRETENDARD_p2: fontGenerator(400, 1, 160, -0.15),
    PRETENDARD_p3: fontGenerator(400, 0.875, 160, -0.1),
    PRETENDARD_p4: fontGenerator(400, 0.625, 160, -0.1),

    PRETENDARD_btn1: fontGenerator(500, 1.125, 130, 0),
    PRETENDARD_btn2: fontGenerator(500, 1, 130, 0),
    PRETENDARD_btn3: fontGenerator(400, 0.875, 130, 0),
    PRETENDARD_btnBold: fontGenerator(700, 0.875, 130, 0),

    PRETENDARD_caption: fontGenerator(400, 0.75, 140, 0),
    PRETENDARD_context: fontGenerator(500, 1, 130, 0),
    PRETENDARD_code: fontGenerator(400, 1, 130, 0),
};

export default font;