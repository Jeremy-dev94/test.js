let i = 1;

while(i < 10){
  console.log(`=== table de ${i} ===`);
  for (let y = 1; y < 10; y++){
    console.log(`${y} x ${i} = ${y*i} `)
  }
  i++;
}