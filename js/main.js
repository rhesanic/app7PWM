/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*jshint esversion: 6*/

const app = (() => {

  function getImageName(country) {

    // create and return a promise
	country	=	country.toLowerCase();
	//input akan dilakukan perubahan menjadi bentuk abjad lowercase 
	var	promiseOfImageName	=	new	Promise(function(resolve,	reject)	{
		//kemudian masuk menjadi sebuah variabel yang nilainya adalah resolve atau reject
			setTimeout(function()	{
					if	(country	===	'spain'	||	country	===	'chile'	||	country	===	'peru' ||	country	===	'indonesia')	{
							resolve(country	+	'.png');
							//dibuat ketika nilai dari intup id country memiliki nilai sepert yang ada pada kondisi diatas
							//maka akan dilakukan resolve dengan memberikan tambahan ekstensi file .png untuk bisa mengambil gambar 
					}	else	{
							reject(Error('Didn\'t	receive	a	valid	country	name!'));
							//dilakukan reject ketika input dari id country tidak ada pada daftar flag country
							// dan akan ditampilkan pesan error 'Didn\'t	receive	a	valid	country	name!'
					}
			},	1000);
	});
	console.log(promiseOfImageName);
	//digunakan untuk menampilkan log ketika proses promise sedang berlansung pada console web browser
	return	promiseOfImageName;
	//mengembalikan nilai akhir dari promiseOfImageName

  }

  function isSpain(country) {

    // Optional - create and return a promise that resolves if input is "Spain"
	
  }

  function flagChain(country) {

    // use the promise
	return	getImageName(country)
	.catch(fallbackName)
	//fungsi yang ketika input error maka akan masuk ke default perintah yang ada pada fungsi ini
	.then(fetchFlag)
	.then(processFlag)
	.then(appendFlag)
	.catch(logError);
	//menampilkan log error pada console web browser

  }

  function allFlags(promiseList) {

    // use promise.all

  }


  // call the allFlags function


  // use Promise.race


  /* Helper functions */

  function logSuccess(result) {
    console.log('Success!:\n' + result);
  }
//menampilkan log sukses pada console web browser

  function logError(err) {
    console.log('Oh no!:\n' + err);
  }
//menampilkan log gagal pada console web browser

  function returnFalse() {
    return false;
  }
//mengambalikan nilai salah 

  function fetchFlag(imageName) {
    return fetch('flags/' + imageName); // fetch returns a promise
  }
//melakukan fething dari input country, kemudian diambil gambar bendera dari direktorti flags/+nama file bendera

  function processFlag(flagResponse) {
    if (!flagResponse.ok) {
      throw Error('Bad response for flag request!'); // This will implicitly reject
	  //ketika response dari flag tidak ok maka dilakukan reject
    }
    return flagResponse.blob(); // blob() returns a promise
	//dilakukan return nilai flag dalam bentuk blob()
  }
  

  function appendFlag(flagBlob) {
    const flagImage = document.createElement('img');
	//membuat dokumen dengan format img dari falg image
    const flagDataURL = URL.createObjectURL(flagBlob);
	//membuat flag data url dengan flag blob
    flagImage.src = flagDataURL;
	//diambil resource untuk flag data url
    const imgContainer = document.getElementById('img-container');
    imgContainer.appendChild(flagImage);
    imgContainer.style.visibility = 'visible';
	//gambar dari flag dimasukkan kedalam container kemudian image tersebut visibilityny diubah menjdasi visible
  }

  function fallbackName() {
    return 'indonesia.png';
  }

  // Don't worry if you don't understand this, it's not part of Promises.
  // We are using the JavaScript Module Pattern to enable unit testing of
  // our functions.
  return {
    getImageName: (getImageName),
    flagChain: (flagChain),
    isSpain: (isSpain),
    fetchFlag: (fetchFlag),
    processFlag: (processFlag),
    appendFlag: (appendFlag),
    allFlags: (allFlags)
  };

})();
