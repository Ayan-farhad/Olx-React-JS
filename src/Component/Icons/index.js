function Categories() {

    return (
        <div>
            <img style={banner} width={95} src="https://images.olx.com.pk/thumbnails/424970966-800x600.webp"/>

            <h2 style={Categoriesleft} >All Categories</h2>

        </div>
    )
}

export default Categories;

const Categoriesleft = {
    textAlign: 'left',
    marginLeft: '35px'
};
const banner ={
    width: '95%'
}
