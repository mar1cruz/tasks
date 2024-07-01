function maskify(cc) {
  if (cc.length < 4) return cc;

  const lattice = cc.length - 4;
  let result = "";

  for (let i = 0; i < lattice; i++) {
    result += "#";
  }
  
  return result + cc.slice(-4);
}

console.log(maskify("55555"));

//https://www.codewars.com/kata/5412509bd436bd33920011bc