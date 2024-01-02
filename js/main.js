console.log('Hello Parcel Bundler');

async function test() {
  const promis = Promise.resolve(123);
  console.log(await promis);
} 