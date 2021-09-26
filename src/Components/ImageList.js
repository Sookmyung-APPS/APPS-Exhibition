import dummy from "../db/MembersImg.json";


function ImageList(){
    return <div>
        <table class="table">
            <tr>
                {dummy.imageList1.map(image => (
                    <td key={image.id}>
                        <img src={image.img} width="130" ></img>
                        <h5>{image.name}</h5>
                    </td>
                ))}
            </tr>
            <tr>
                {dummy.imageList2.map(image => (
                    <td key={image.id}>
                        <img src={image.img} width="130" ></img>
                        <h5>{image.name}</h5>
                    </td>
                ))}
            </tr>
            <tr>
                {dummy.imageList3.map(image => (
                    <td key={image.id}>
                        <img src={image.img} width="130" ></img>
                        <h5>{image.name}</h5>
                    </td>
                ))}
            </tr>
            <tr>
                {dummy.imageList4.map(image => (
                    <td key={image.id}>
                        <img src={image.img} width="130" ></img>
                        <h5>{image.name}</h5>
                    </td>
                ))}
            </tr>
            <tr>
                {dummy.imageList5.map(image => (
                    <td key={image.id}>
                        <img src={image.img} width="130" ></img>
                        <h5>{image.name}</h5>
                    </td>
                ))}
            </tr>
            <tr>
                {dummy.imageList6.map(image => (
                    <td key={image.id}>
                        <img src={image.img} width="130" ></img>
                        <h5>{image.name}</h5>
                    </td>
                ))}
            </tr>
        </table>

    </div>
}

export default ImageList;