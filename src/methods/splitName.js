const SplitName = (value) => {
    const splitArray = value.split(' ');
    if (splitArray.length < 2) {
        return splitArray[0][0].toUpperCase();
    } else {
        return splitArray[0][0].toUpperCase() + splitArray[1][0].toUpperCase();
    }
}

export default SplitName;