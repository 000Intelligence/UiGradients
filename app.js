// document.designMode = "on";

const Colors = ['linear-gradient(to right, #f85032, #e73827)', 'linear-gradient(to right, #808080, #3fada8)',
    'linear-gradient(to right, #be93c5, #7bc6cc)', 'linear-gradient(to right, #3a6186, #89253e)',
    'linear-gradient(to right, #ef32d9, #89fffd)', 'linear-gradient(to right, #de6161, #2657eb)',
    'linear-gradient(to right, #ff00cc, #333399)', 'linear-gradient(to right, #ff7e5f, #feb47b) ',
    'linear-gradient(to right, #00c3ff, #ffff1c)', 'linear-gradient(to right, #f4c4f3, #fc67fa)',
    'linear-gradient(to right, #41295a, #2f0743)', 'linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)',
    'linear-gradient(to right, #ee0979, #ff6a00)', 'linear-gradient(to right, #f3904f, #3b4371)',
    'linear-gradient(to right, #67b26f, #4ca2cd)', 'linear-gradient(to right, #3494e6, #ec6ead)',
    'linear-gradient(to right, #dbe6f6, #c5796d)', 'linear-gradient(to right, #9cecfb, #65c7f7, #0052d4)',
    'linear-gradient(to right, #dce35b, #45b649)', 'linear-gradient(to right, #ffafbd, #ffc3a0)',
    'linear-gradient(to right, #093028, #237a57)', 'linear-gradient(to right, #43c6ac, #191654)',
    'linear-gradient(to right, #4568dc, #b06ab3)', 'linear-gradient(to right, #0575e6, #021b79)',
    'linear-gradient(to right, #200122, #6f0000)', 'linear-gradient(to right, #44a08d, #093637)',
    'linear-gradient(to right, #6190e8, #a7bfe8)', 'linear-gradient(to right, #34e89e, #0f3443)',
    'linear-gradient(to right, #f7971e, #ffd200)', 'linear-gradient(to right, #c33764, #1d2671)',
    'linear-gradient(to right, #20002c, #cbb4d4)', 'linear-gradient(to right, #d66d75, #e29587)',
    'linear-gradient(to right, #30e8bf, #ff8235)', 'linear-gradient(to right, #b2fefa, #0ed2f7)',
    'linear-gradient(to right, #4ac29a, #bdfff3)', 'linear-gradient(to right, #e44d26, #f16529)',
    'linear-gradient(to right, #eb5757, #000000)', 'linear-gradient(to right, #f2994a, #f2c94c)',
    'linear-gradient(to right, #56ccf2, #2f80ed)', 'linear-gradient(to right, #007991, #78ffd6)',
    'linear-gradient(to right, #000046, #1cb5e0)', 'linear-gradient(to right, #159957, #155799)',
    'linear-gradient(to right, #c0392b, #8e44ad)', 'linear-gradient(to right, #ef3b36, #ffffff)',
    'linear-gradient(to right, #283c86, #45a247)', 'linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)',
    'linear-gradient(to right, #cb356b, #bd3f32)', 'linear-gradient(to right, #36d1dc, #5b86e5)',
    'linear-gradient(to right, #000000, #0f9b0f)', 'linear-gradient(to right, #1c92d2, #f2fcfe)',
    'linear-gradient(to right, #642b73, #c6426e)', 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
    'linear-gradient(to right, #7f00ff, #e100ff)', 'linear-gradient(to right, #ff9966, #ff5e62)',
    'linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d)', 'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)',
];

const btn = document.getElementById('btn');
const bg = document.getElementById('bg');
const ColorCode = document.getElementById('color-code');
const CopyAnimation = document.querySelector('.copy-animation');
const CopyAnimationLength = document.querySelector('.copy-animation');

btn.addEventListener('click', function () {
    let RandomColor = Math.floor(Math.random() * Colors.length);
    bg.style.background = Colors[RandomColor];
    ColorCode.value = 'background : ' + Colors[RandomColor];
    ColorCode.style.background = Colors[RandomColor];
    setInterval(function () {
        bg.classList.add('fadeIn');
        ColorCode.classList.add('fadeInCode');
    }, 200)
    ColorCode.classList.remove('fadeInCode');
    bg.classList.remove('fadeIn');
})

ColorCode.addEventListener('click', function () {
    navigator.clipboard.writeText(ColorCode.innerHTML);
    CopyAnimation.classList.add('copy-animation-copied');
    setTimeout(function () {
        CopyAnimation.classList.remove('copy-animation-copied');
    }, 2000)
})



