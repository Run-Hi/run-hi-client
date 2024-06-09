const fontGenerator = (
    weight: number,
    size: number,
    lineHeight: number,
    letterSpacing: number
) => ({
    fontFamily: `Giants-Inline`,
    fontWeight: weight,
    fontSize: `${size}rem`,
    lineHeight: `${lineHeight}%`,
    letterSpacing: `${letterSpacing}px`,
});

const font = {
    INLINE_D1: fontGenerator(700, 4.5, 130, -1.5),
    INLINE_D2: fontGenerator(700, 3.75, 130, -0.5),
    INLINE_D3: fontGenerator(700, 3, 130, 0),
    INLINE_D4: fontGenerator(700, 2.75, 130, 0),
    INLINE_D5: fontGenerator(700, 2.5, 130, 0),

    INLINE_H1: fontGenerator(700, 2.25, 140, 0.25),
    INLINE_H2: fontGenerator(700, 1.75, 140, 0),
    INLINE_H3: fontGenerator(600, 1.5, 140, 0.15),
    INLINE_H4: fontGenerator(600, 1.25, 140, 0.15),
    INLINE_H5: fontGenerator(600, 1.125, 140, 0.15),
    INLINE_H6: fontGenerator(600, 1, 140, 0.15),

    INLINE_p1: fontGenerator(400, 1.125, 140, 0.15),
    INLINE_p2: fontGenerator(400, 1, 160, -0.15),
    INLINE_p3: fontGenerator(400, 0.875, 160, -0.1),
    INLINE_p4: fontGenerator(400, 0.625, 160, -0.1),

    INLINE_btn1: fontGenerator(500, 1.125, 130, 0),
    INLINE_btn2: fontGenerator(500, 1, 130, 0),
    INLINE_btn3: fontGenerator(400, 0.875, 130, 0),
    INLINE_btnBold: fontGenerator(700, 0.875, 130, 0),

    INLINE_caption: fontGenerator(400, 0.75, 140, 0),
    INLINE_context: fontGenerator(500, 1, 130, 0),
    INLINE_code: fontGenerator(400, 1, 130, 0),
};

export default font;