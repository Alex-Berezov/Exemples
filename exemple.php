function fani_send_mail(){
	    
	  /* Mega Calc */
		$megaCalckName  		 	= $_POST["megaCalckName"];
		$megaCalckPhone 		 	= $_POST["megaCalckPhone"];
		$megaCalckMail 		 		= $_POST["megaCalckMail"];
		/*Stairs type*/
		$type_of_stairs			 	= $_POST["type_of_stairs"];
		$calc_price 			 	= $_POST["calc_price"];
		$calc_price_mono			= $_POST["calc_price_mono"];
		$frame_type   			 	= $_POST["frame_type"];
		/*Form of stairs*/
		$form_stairs_select_item 	= $_POST["form_stairs_select_item"];
		$uploadFile				 	= $_FILES["uploadFile"]["name"];
		/*Dimensions*/
		$heightToCeiling		 	= $_POST["heightToCeiling"];
		$thicknessOfSlab		 	= $_POST["thicknessOfSlab"];
		$lengthOfSecondFloorOpening = $_POST["lengthOfSecondFloorOpening"];
		$widthOfSecondFloorOpening	= $_POST["widthOfSecondFloorOpening"];
		$dimensions_uploadFile		= $_FILES["dimensions_uploadFile"]["name"];
		/*Degrees*/
		$selectedMaterial			= $_POST["selectedMaterial"];
		$painting					= $_POST["painting"];
		$illumination				= $_POST["illumination"];
		/*Risers*/
		$risers 					= $_POST["risers"];
		/*Bowstring Stringer*/
		$bowstringStringer			= $_POST["bowstringStringer"];
		/*Handrail*/
		$lengthOfFence				= $_POST["lengthOfFence"];
		$handrail_row_1				= $_POST["handrail_row_1"];
		$handrail_row_2				= $_POST["handrail_row_2"];


		$to = 'shop@yeti-spb.ru';
        $subject = 'Заполненная форма Мега Калькулятора';

        $body = "Новый клиент!\n";

		if(!empty($megaCalckName)){
			$body .= "\nИмя: " . $megaCalckName ;
		}
		if(!empty($megaCalckPhone)){
			$body .= " \nТелефон: " . $megaCalckPhone ;
		}
		if(!empty($megaCalckMail)){
			$body .= " \Почта: " . $megaCalckMail ;
		}
		if(!empty($megaCalckName)){
			$body .= "\nТипы лестниц: $type_of_stairs";

			if ($type_of_stairs == 'На металлокаркасе') {
				if (!empty($calc_price)) {
					$body .= "\nРассчитать стоимость каркаса: " . $calc_price;
					$body .= "\nВыберите тип каркаса: " . $frame_type;
				} else {
					$body .= "\nНЕ НУЖНО рассчитать стоимость каркаса";
				}
			}

			if ($type_of_stairs == 'Монолитная') {
				if (!empty($calc_price_mono)) {
					$body .= "\nРассчитать стоимость заливки  основания: " . $calc_price_mono;
				} else {
					$body .= "\nНЕ НУЖНО рассчитать стоимость заливки  основания";
				}
			}
		}
		if(!empty($megaCalckName)){
			$body .= "\nФорма лестниц:
				Выберите форму лестницы: $form_stairs_select_item
				Загрузите собственный вариант: $uploadFile
			";
		}
		if(!empty($megaCalckName)){
			$body .= "\nГабариты:
				Высота до потолка: $heightToCeiling
				Толщина перекрытия: $thicknessOfSlab
				Длина проема второго этажа: $lengthOfSecondFloorOpening
				Ширина проема второго этажа: $widthOfSecondFloorOpening
				Если у Вас есть собственный проект: $dimensions_uploadFile
			";
		}
		if(!empty($megaCalckName)){
			$body .= "\nСтупеньки:
				Выберите материал: $selectedMaterial
			";
				if (!empty($painting)) {
					$body .= "	Покраска: $painting
				";
				} else {
					$body .= "	Покраска: - морилка + лак
				";
				}
				if (!empty($illumination)) {
					$body .= "Подсветка: $illumination
				";
				} else {
					$body .= "Подсветка: Простая 
				";
				}
		}
		if(!empty($megaCalckName)){
			$body .= "\nПодступеньки: $risers";
		}
		if(!empty($megaCalckName)){
			$body .= "\nTетива, косоур: $bowstringStringer";
		}
		if(!empty($megaCalckName)){
			$body .= "\nОграждение и поручень:
				Длина ограждения: $lengthOfFence
				Материал ограждения: $handrail_row_1	
				Материал поручня: $handrail_row_2	
			";
		}

		/* End Mega Calc */
        
    /*Send upload files on e-mail*/  
      $uploaddir = './uploads'; // .

	    if( ! is_dir( $uploaddir ) ) mkdir( $uploaddir, 0777 );
        
        
      $files      = $_FILES;
    	$done_files = array();
    
    	foreach( $files as $file ){
    		$file_name = $file['name'];
    
    		if( move_uploaded_file( $file['tmp_name'], "$uploaddir/$file_name" ) ){
    			$done_files[] = realpath( "$uploaddir/$file_name" );
    		}
    	}
        
        $headers = 'From: Мега калькулятор <megaCalc@yeti-spb.ru>' . "\r\n";
        
        wp_mail( $to, $subject, $body, $headers, $done_files );
	    
	    
	}
	add_action( 'wp_ajax_fani_send_mail_action', 'fani_send_mail' );
	add_action( 'wp_ajax_nopriv_fani_send_mail_action', 'fani_send_mail' );
