console.log('Assignment-2');

function vowelCount(stingValue) {

    stingValue_loweCase=stringValue.toLowerCase()
    const countMap=new Map()

    const vowel='aeiou'

    for (const element of stingValue_loweCase) {

        if (vowel.includes(element)) {
            if (!countMap.has(element)){
                countMap.set(element,1)
            }
            else{
                countMap.set(element,countMap.get(element)+1)
            }
        }
        }
        
    return countMap

}

let stringValue='Soumya Ranjan Dhar'
let countVowel = vowelCount(stringValue)
console.log(countVowel);
