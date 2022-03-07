console.log('» index.js is running');

function wait(ms) {
  const start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

// *=====================================================
// *                   PROMISES
// *=====================================================

const promise = new Promise((resolve, reject) => {
  // some calculation
  wait(2000);
  const userData = {
    firstName: 'Barry',
    birthYear: 1977,
  };
  /* let successful = Math.floor(Math.random() * 2);
  if (successful)  */
  resolve(userData);
  reject(new Error('Something went wrong!'));
});

// promise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// promise
//   .then((res) => {
//     console.log(res);
//     return 'selam';
//   })
//   .then((r) => {
//     console.log(r);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

  const cayDemle = () => {
    // suyuKaynat(); ->  cayEkle(); ->   bekle(); ->   afiyet();
    suyuKaynat()
      .then((durum1) => {
        console.log(durum1);
        return cayEkle();
      })
      .then((durum2) => {
        console.log(durum2);
        bekle(1500);
        return afiyet();
      })
      .then((durum3) => {
        console.log(durum3);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  const suyuKaynat = () => {
    return new Promise((resolve, reject) => {
      const nasip = Math.floor(Math.random() * 2);
      if (nasip) {
        bekle(2000);
        resolve('✅ Su kaynadi');
      }
      reject(new Error('❌ Kettle arizali'));
    });
  };
  
  const cayEkle = () => {
    return new Promise((resolve, reject) => {
      const cayNasibi = Math.floor(Math.random() * 2);
      if (cayNasibi) {
        bekle(500);
        resolve('✅ Cay eklendi.');
      }
      reject('❌ Cay bitmis');
    });
  };
  
  const bekle = (ms) => {
    const start = new Date().getTime();
    while (new Date().getTime() < start + ms);
  };
  
  const afiyet = (m) => {
    return '🫖 cay hazir afiyet olsun';
  };
  
  cayDemle();