try {
    var a = 0;
    console.notify(10 / a);
} catch (err) {
    console.log(err);
    console.log(err.name);
    console.log(err.message);

    console.warn(err);
    console.error(err);
}
console.log('finito.');