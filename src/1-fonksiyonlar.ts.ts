// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// "kardesPayi" isminde bir fonksiyon oluşturalım. Bu fonksiyon, parametre
// olarak bir isim alsın. Eğer fonksiyona bir isim girilirse, fonksiyon
// "bir tane İSİM_BURAYA_GELECEK için, bir de benim için" şeklinde bir string dönsün.
// Eğer fonksiyona bir isim girilmezse, fonksiyon şu şekilde bir string dönsün:
// "bir tane senin için, bir de benim için."

// Örnekler:
// kardesPayi("Ahmet") --> "Bir tane Ahmet için, bir de benim için"
// kardesPayi() --> "Bir tane senin için, bir de benim için."


// Kodu buraya yazalım...




// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "Artık yıl" hesaplayan bir "isLeapYear" fonksiyonu yazalım. Bu fonksiyon, 
// parametre olarak bir yıl alsın ve eğer bu yıl artık yıl ise true, değilse
// false dönsün. Bir yılın artık yıl olması için şu koşulların sağlanması gerekiyor:

// 1 - Yıl 4'e tam bölünmeli
// 2 - Yıl 100'e tam bölünmemeli

// VEYA

// 1 - Yıl 400'e tam bölünmeli

// Artık yıl hakkında daha fazla bilgi için:
// https://tr.wikipedia.org/wiki/Art%C4%B1k_y%C4%B1l

// Örnekler:
// artikYil(2024) --> true
// artikYil(2021) --> false
// artikYil(2020) --> true
// artikYil(2019) --> false
// artikYil(2000) --> true
// artikYil(1900) --> false
// artikYil(1700) --> false
// artikYil(1600) --> true

// İPUCU: mod alma işlemi için % operatörünü kullanabiliriz.


// Kodu buraya yazalım...


function kardesPayi(isim?: string): string {
    if (isim) {
      return `Bir tane ${isim} için, bir de benim için`;
    } else {
      return "Bir tane senin için, bir de benim için";
    }
  }
  console.log(kardesPayi("Ahmet")); 
  console.log(kardesPayi());
  function artikYil(yil: number): boolean {
    if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(artikYil(2024)); 
  console.log(artikYil(2021)); 
  console.log(artikYil(2020)); 
  console.log(artikYil(2019)); 
  console.log(artikYil(2000)); 
  console.log(artikYil(1900)); 
  console.log(artikYil(1700)); 
  console.log(artikYil(1600)); 
  