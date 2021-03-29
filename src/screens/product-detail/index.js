import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
let { width, height } = Dimensions.get('window');
import API_ENDPOINT from '../../constants/Config';
import { getApi } from '../../services/http-service';


function ProductDetail(props) {
    const { route } = props;
    const { id } = route.params;
    const [product, setProduct] = useState({})

    useEffect(() => {
        async function fetchProduct() {
            const url = API_ENDPOINT + `products/${id}`;
            const product = await getApi(url) || {};
            setProduct(product);
        }
        fetchProduct();
    }, [id])
    return (
        <View style={styles.container}>
            <View flex={1} style={styles.imageContainer}>
                <ImageBackground source={{ uri: product?.image }} style={styles.image}>
                </ImageBackground>
            </View>
            <View flex={1} style={[styles.imageContainer, styles.productDescriptor]}>
                <Text style={styles.label}>Product : </Text>
                <Text>{product?.title}</Text>
                <Text style={styles.label}>Price : </Text>
                <Text> {product?.price} AED</Text>
                <Text style={styles.label}>Description : </Text>
                <Text>{product?.description}</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => { }}
            >
                <Text> Add To Cart </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        width: width,
        height: 200,
        marginTop: 20
    },
    imageContainer: {
        flex: 1,
        height: height / 3,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10
    },
    productDescriptor: {
        margin: 20
    },
    addTocart: {
        backgroundColor: 'yellow',
        padding: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FDAD2F',
        margin: 100,
        padding: 8,
    }
})

export default ProductDetail;
