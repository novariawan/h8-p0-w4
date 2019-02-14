// Logic Challenge - Ubah Huruf

function ubahHuruf(kata) {
    arrIn = kata.split('');
    var arrOut=[];
    //console.log(arrIn)
        for (i=0;i<arrIn.length;i++) {
            switch (arrIn[i]) {
            case 'a':
            arrOut.push('b');
            break;
            case 'b':
            arrOut.push('c');
            break;
            case 'c':
            arrOut.push('d');
            break;
            case 'd':
            arrOut.push('e');
            break;
            case 'e':
            arrOut.push('f');
            break;
            case 'f':
            arrOut.push('g');
            break;
            case 'g':
            arrOut.push('h');
            break;
            case 'h':
            arrOut.push('i');
            break;
            case 'i':
            arrOut.push('j');
            break;
            case 'j':
            arrOut.push('k');
            break;
            case 'k':
            arrOut.push('l');
            break;
            case 'l':
            arrOut.push('m');
            break;
            case 'm':
            arrOut.push('n');
            break;
            case 'n':
            arrOut.push('o');
            break;
            case 'o':
            arrOut.push('p');
            break;
            case 'p':
            arrOut.push('q');
            break;
            case 'q':
            arrOut.push('r');
            break;
            case 'r':
            arrOut.push('s');
            break;
            case 's':
            arrOut.push('t');
            break;
            case 't':
            arrOut.push('u');
            break;
            case 'u':
            arrOut.push('v');
            break;
            case 'v':
            arrOut.push('w');
            break;
            case 'w':
            arrOut.push('x');
            break;
            case 'x':
            arrOut.push('y');
            break;
            case 'y':
            arrOut.push('z');
            break;
            case 'z':
            arrOut.push('a');
            break;
        }
        //console.log(arrOut);
    }
    out = arrOut.join('');
    return out;
  // you can only write your code here!
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu