function high(x) {

  
    let alphabet = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    }

    //create an array of individual words
    let words = x.split(' ')
    
    //map through each word, go through each letter, create a sum 
    let scores = words.map((el) => {
        let score = 0;
        let letters = el.split('');
        for (let ltr of letters) {
            score += alphabet[ltr]
        }
        return score;
    })

    //find the highest number in the scores array
    let highest = 0;
    for (let score of scores) {
        if (score > highest) {
            highest = score;
        }
    }
    //find the word with the highest score 
    let highestIdx = scores.indexOf(highest)
    
    return (words[highestIdx])

}

high('man i need a taxi up to ubud')

