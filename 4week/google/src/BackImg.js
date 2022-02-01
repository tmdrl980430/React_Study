
const BackImg = () => {
    const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
    const chosenImage = images[Math.floor(Math.random() * images.length)];

    console.log(chosenImage);
    return (

        <img src={chosenImage}></img>

    );
}


export default BackImg;