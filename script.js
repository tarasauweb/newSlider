function slider() {
    const sliderImg = document.querySelectorAll('.slider .slide img')
    
    const widthOneImgSlider = sliderImg[0].clientWidth; // получаем размер ширины одной картинки
    console.log(widthOneImgSlider)

    const widthWindow = document.body.clientWidth
    console.log(widthWindow)

    const sliderSlides = document.querySelector('.slider-slides');

    sliderImg.forEach(item=>{
        item.style.width = widthOneImgSlider + 'px' // устанавливаем одинаковый размер всех картинок при размере экрана 1440 и более
    })

    
    
    if(widthWindow<1440){
        let valueWindow = 100 * (1440 - widthWindow) / 1440 // находим значение , на которое window меньше чем 1440 в процентах
        let valueSliderImg = valueWindow * 800 / 100 // находим значение , на которое уменьшать размер картинки от первоначального значения
        sliderImg.forEach(item=>{
            item.style.width = widthOneImgSlider - valueSliderImg + 'px' // уменьшаем размер картинок в зависимости от размера экрана где экран меньше 1440px
        })

        sliderSlides.style.width = widthOneImgSlider*sliderImg.length + 'px'
        sliderSlides.style.transform = `translateX(-${widthOneImgSlider/2}px)`
    }

    
}

slider()