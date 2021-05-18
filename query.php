<?php
$name=$_POST['name'];
$to="muladhar.info@gmail.com";
$subject="Query From Your Website Email Address: ".$_POST['email'];
$message=$_POST['message'];
$from="FROM: info@adhyay.co.in";
 if(mail($to,$subject,$message,$from)){
	echo "<script>
	  alert('Your Query Submitted Successfully...')
	  location.href='index.html'
	</script>";
} 

 ?>