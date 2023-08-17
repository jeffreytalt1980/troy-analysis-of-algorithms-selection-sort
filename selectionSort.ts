const selectionSort = (array: number[]): number[] => {

    let indexOfSmallest: number;
    let swapHolder: number;

    for (let i = 0; i < array.length; i++) {
        indexOfSmallest = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexOfSmallest]) {
                indexOfSmallest = j;
            }
        }

        if (indexOfSmallest !== i) {
            swapHolder = array[i];
            array[i] = array[indexOfSmallest];
            array[indexOfSmallest] = swapHolder;
        }
    }
    return array;
}

const main = () => {
    const input: number[] = process.argv.slice(2)
        .map((idx) => Number(idx))
        .filter((idx) => !isNaN(idx));

    console.log(`\nYour unsorted numerical array values are: ${input}.\n`);

    const result = selectionSort(input.slice());

    console.log(`Your sorted values are: ${result}\n`);
}

main();
