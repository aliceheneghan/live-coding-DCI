function fn1() {
    let name = "fn1";
    console.log(`hey, you are running ${name}`);
    return name;
}

function fn2() {
    let name = "fn2";
    fn1();
    console.log(`hey, you are running ${name}`);
    return name;
}

function fn3() {
    let name = "fn3";
    fn2();
    console.log(`hey, you are running ${name}`);
    return name;
}

fn3();

// 1) fn1, fn2, fn3
// 2) fn3, fn2, fn1