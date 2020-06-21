
/*=====> Section Type of stairs <=====*/

  var labels = document.querySelectorAll('.type_of_stairs_items a'),
      spans = document.querySelectorAll('.type_of_stairs_items a span'),
      mettalType = document.querySelector('.selectMettalType'),
      monoType = document.querySelector('.selectMonoType');

  for (let label of labels) {
    label.addEventListener('click', function(event) {
      var calcPriceInput = document.querySelector('.type_of_stairs .calc_price'),
          calcPriceMono = document.querySelector('.calc_price_mono'),
          selectedFrameType = document.querySelector('.stairs_type .wrapper .frame_type'),
          frameChecked = document.querySelectorAll('.type_of_stairs_items label input');

      for (let label of labels) {
        label.classList.remove('typeOfStairsSelected');
      }

      for (let frameCheck of frameChecked) {
        frameCheck.removeAttribute('checked');
      }

      for (let span of spans) {
        span.innerHTML = '';
      }

      this.classList.add('typeOfStairsSelected');

      let checkedFrame = this.querySelector('input');
      checkedFrame.setAttribute('checked', 'true');

      let spanIn = this.querySelector('.head span');
      spanIn.innerHTML = '<p></p>';

      /*Type of stairs hide Frame type*/
        if (mettalType.classList.contains('typeOfStairsSelected')) {
          calcPriceInput.style.display = 'flex';
          selectedFrameType.classList.add('calc_price_checked');
        } else {
          calcPriceInput.style.display = 'none';
          selectedFrameType.classList.remove('calc_price_checked');
        }

        if (monoType.classList.contains('typeOfStairsSelected')) {
          calcPriceMono.style.display = 'flex';
          calcPriceMono.style.marginLeft = 'auto';
        } else {
          calcPriceMono.style.display = 'none';
        }
      /*End Type of stairs hide Frame type*/
    });
  }

  /*===============> <================*/
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        autoplay: false,
        center:true,
        margin:10,
        nav: true,
        URLhashListener:true,
        startPosition: 'URLHash'
    });
  });

  /*Frame type mob nav*/
  setTimeout(function() {
    var nextButton = document.querySelector('.owl-next'),
        prevButton = document.querySelector('.owl-prev'),
        mobNavLabels = document.querySelectorAll('.type_of_stairs_items label a'),
        mobNavSpan = document.querySelectorAll('.type_of_stairs_items label a span'),
        i = 0,
        calcPriceInputMobNav = document.querySelector('.type_of_stairs .calc_price'),
        calcPriceMonoMobNav = document.querySelector('.calc_price_mono'),
        selectedFrameTypeMobNav = document.querySelector('.stairs_type .wrapper .frame_type'),
        mettalTypeMobNav = document.querySelector('.selectMettalType'),
        monoTypeMobNav = document.querySelector('.selectMonoType');

    prevButton.addEventListener('click', function() {
      mobNavLabels[i].classList.remove('typeOfStairsSelected');
      mobNavSpan[i].innerHTML = '';

      i--;
      if(i < 0) {
          i = mobNavLabels.length - 1;
      }

      mobNavLabels[i].classList.add('typeOfStairsSelected');
      mobNavSpan[i].innerHTML = '<p></p>';

      /*Type of stairs hide Frame type*/
        if (mettalTypeMobNav.classList.contains('typeOfStairsSelected')) {
          calcPriceInputMobNav.style.display = 'flex';
          selectedFrameTypeMobNav.classList.add('calc_price_checked');
        } else {
          calcPriceInputMobNav.style.display = 'none';
          selectedFrameTypeMobNav.classList.remove('calc_price_checked');
        }

        if (monoTypeMobNav.classList.contains('typeOfStairsSelected')) {
          calcPriceMonoMobNav.style.display = 'flex';
          calcPriceMonoMobNav.style.marginLeft = 'auto';
        } else {
          calcPriceMonoMobNav.style.display = 'none';
        }
      /*End Type of stairs hide Frame type*/
    });

    nextButton.addEventListener('click', function() {
      mobNavLabels[i].classList.remove('typeOfStairsSelected');
      mobNavSpan[i].innerHTML = '';
      i++;
      if(i >= mobNavLabels.length) {
          i = 0;
      }

      mobNavLabels[i].classList.add('typeOfStairsSelected');
      mobNavSpan[i].innerHTML = '<p></p>';

      /*Type of stairs hide Frame type*/
        if (mettalTypeMobNav.classList.contains('typeOfStairsSelected')) {
          calcPriceInputMobNav.style.display = 'flex';
          selectedFrameTypeMobNav.classList.add('calc_price_checked');
        } else {
          calcPriceInputMobNav.style.display = 'none';
          selectedFrameTypeMobNav.classList.remove('calc_price_checked');
        }

        if (monoTypeMobNav.classList.contains('typeOfStairsSelected')) {
          calcPriceMonoMobNav.style.display = 'flex';
          calcPriceMonoMobNav.style.marginLeft = 'auto';
        } else {
          calcPriceMonoMobNav.style.display = 'none';
        }
      /*End Type of stairs hide Frame type*/
    });
  }, 10000);
  /*Frame type mob nav*/

/* Frame type */
var farmeLabels = document.querySelectorAll('.frame_type_items label'),
    frameSpan = document.querySelectorAll('.frame_type_items label .chosen_type span'),
    chosenImg = document.querySelectorAll('.image');

for (let farmeLabel of farmeLabels) {
  farmeLabel.addEventListener('click', function(event) {
    for (let img of chosenImg) {
      img.classList.remove('frameTypeSelected');
    }

    for (let span of frameSpan) {
      span.innerHTML = '';
    }
    
    this.firstElementChild.classList.add('frameTypeSelected');

    let spanIn = this.querySelector('.chosen_type span');
    spanIn.innerHTML = '<p></p>';
  });
}
/* End Frame type */

/*Hide Frame type*/
var calcPriceInp = document.querySelector('.type_of_stairs .calc_price input[type=checkbox]'),
    selectFrameType = document.querySelector('.stairs_type .wrapper .frame_type');

calcPriceInp.addEventListener('click', function() {
  selectFrameType.classList.toggle('calc_price_checked');
});
/*End Hide Frame type*/

/*Frame type mob nav*/
var slickSlide = document.querySelectorAll('.type_of_stairs_mob_slide .slick-slide');
/*Frame type mob nav*/

/*=====> End Section Type of stairs <=====*/

/*=====> Section Form of stairs <=====*/
  /*Upload file code*/
  var inputs = document.querySelectorAll( '.inputfile' );

  Array.prototype.forEach.call( inputs, function( input ) {
    var label  = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener( 'change', function( e ) {
      var fileName = '';
      if ( this.files && this.files.length > 1 ) {
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      } else {
        fileName = e.target.value.split( '\\' ).pop();
      }

      if ( fileName ) {
        label.querySelector( 'span' ).innerHTML = fileName;
      } else {
        label.innerHTML = labelVal;
      }
    });
  });
  /*End Upload file code*/

  let formStairsItems = document.querySelectorAll('.preview .preview_item'),
      displayBlocks = document.querySelectorAll('.form_stairs_select .display .display_item'),
      formInput = document.querySelectorAll('.form_stairs_select .preview .preview_item input[type=radio]'),
      formStairsLabels = document.querySelectorAll('.preview .preview_item span'),
      formStairsP = document.querySelectorAll('.preview .preview_item span p'),
      tabName;

  for (let formStairsItem of formStairsItems) {
    formStairsItem.addEventListener('click', function(event) {

        for (let formStairsLabel of formStairsLabels) {
          formStairsLabel.classList.remove('is_activeInp');
          formStairsLabel.innerHTML = '';
        }

        //this.setAttribute('checked', '');
        this.lastElementChild.classList.add('is_activeInp');
        this.lastElementChild.innerHTML = '<p></p>';
    });
  }

  let tabForm = function () {
      let formStairsItems = document.querySelectorAll('.preview .preview_item'),//tabNav
          displayBlocks = document.querySelectorAll('.form_stairs_select .display .display_item'),//tabContent
          formStairsLabels = document.querySelectorAll('.preview .preview_item span'),
          formStairsP = document.querySelectorAll('.preview .preview_item span p'),
          tabFormName;

      formStairsItems.forEach(item => {
          item.addEventListener('click', selTabNav)
      });

      function selTabNav() {
          formStairsItems.forEach(item => {
              item.classList.remove('is_activeItem');
          });
          this.classList.add('is_activeItem');
          tabFormName = this.getAttribute('data-tab-name');
          selTabContent(tabFormName);
      }

      function selTabContent(tabFormName) {
          displayBlocks.forEach(item => {
              item.classList.contains(tabFormName) ? item.classList.add('is_activeItem') : item.classList.remove('is_activeItem');
          })
      }

  };

  tabForm();

/*=====> End Section Form of stairs <=====*/

/*=====> Section Dimensions <=====*/

  /*Upload file code*/
  var inputs = document.querySelectorAll( '.inputfile2' );

  Array.prototype.forEach.call( inputs, function( input )
  {
    var label  = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener( 'change', function( e )
    {
      var fileName = '';
      if ( this.files && this.files.length > 1 ) {
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      } else {
        fileName = e.target.value.split( '\\' ).pop();
      }

      if ( fileName ) {
        label.querySelector( 'span' ).innerHTML = fileName;
      } else {
        label.innerHTML = labelVal;
      }
    });
  });
  /*End Upload file code*/

  /*Custom Range Slider*/
  var slider1 = document.getElementById("myRange1"),
      output1 = document.getElementById("demo1"),
      slider2 = document.getElementById("myRange2"),
      output2 = document.getElementById("demo2"),
      slider3 = document.getElementById("myRange3"),
      output3 = document.getElementById("demo3"),
      slider4 = document.getElementById("myRange4"),
      output4 = document.getElementById("demo4");

  output1.innerHTML = slider1.value;
  output2.innerHTML = slider2.value;
  output3.innerHTML = slider3.value;
  output4.innerHTML = slider4.value;

  slider1.oninput = function() {
    output1.innerHTML = this.value;
  }
  slider2.oninput = function() {
    output2.innerHTML = this.value;
  }
  slider3.oninput = function() {
    output3.innerHTML = this.value;
  }
  slider4.oninput = function() {
    output4.innerHTML = this.value;
  }
  /*End Custom Range Slider*/

/*=====> End Section Dimensions <=====*/

/*=====> Section Degrees <=====*/

  let selectMaterialItems = document.querySelectorAll('.select_material_items .select_material_item '),
      selectMaterialLabels = document.querySelectorAll('.select_material_item_input span'),
      selectMaterialP = document.querySelectorAll('.select_material_item_input span p');

  for (let selectMaterialItem of selectMaterialItems) {
    selectMaterialItem.addEventListener('click', function(event) {
        for (let selectMaterialItem of selectMaterialItems) {
          selectMaterialItem.classList.remove('is_activeItem');
        }

        for (let selectMaterialLabel of selectMaterialLabels) {
          selectMaterialLabel.classList.remove('is_activeInput');
          selectMaterialLabel.innerHTML = '';
        }

        this.classList.add('is_activeItem');
        this.querySelector('span').classList.add('is_activeInput');
        this.querySelector('span').innerHTML = '<p></p>';
    });
  }

/*=====> End Section Degrees <=====*/

/*=====> Section Handrail <=====*/

  $(document).ready(function(){
    $('.carousel_row_1').slick();
  });

  $(document).ready(function(){
    $('.carousel_row_2').slick();
  });

  /*Custom Range Slider*/
    var handrailslider = document.getElementById("handrailRange"),
        handrailoutput = document.getElementById("handrailDemo");

    handrailoutput.innerHTML = handrailslider.value;

    handrailslider.oninput = function() {
      handrailoutput.innerHTML = this.value;
    }
  /*End Custom Range Slider*/

/*=====> End Section Handrail <=====*/

/*=====> Ajax send data <=====*/

  function funcS(){
    window.location.href = "/wp-content/themes/yeti/thanks.html";
  }

  $('#megaCalck').on('submit', function(event) {

    event.preventDefault();

    var form = $(this);
    
        var formData = new FormData(this);
            var file = jQuery(document).find('input[type="file"]');
            var individual_file = file[0].files[0];
            formData.append("file", individual_file);
    
      
    $.ajax({
      url: form.attr('action'),
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: funcS
    });

  });

/*=====> End Ajax send data <=====*/
