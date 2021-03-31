import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';
import { API_ENDPOINT } from '../../constants/Config';
import { getApi } from '../../services/http-service';
import { useNavigation } from '@react-navigation/native';
import Loading from '../loading';

const Products = () => {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const url = API_ENDPOINT + 'products';
            const products = await getApi(url) || [];
            setProducts(products);
            setLoading(false);
        }
        fetchProducts();
    }, [])
    return (
        <View style={styles.productContainer}>
            {
                loading && <Loading />
            }
            {
                !loading && (
                    <>
                        <Text style={styles.productText}>Products : </Text>
                        <ScrollView style={styles.scrollView}>
                            <View>
                                {
                                    products && products.map((product, index) => {
                                        return (
                                            <TouchableOpacity key={index} onPress={() => { navigation.navigate('ProductDetail', { id: product.id }) }}>
                                                <View style={styles.productTile}>
                                                    <View flex={4}>
                                                        <ImageBackground source={{ uri: product.image }} style={styles.image}>
                                                        </ImageBackground>
                                                    </View>
                                                    <View flex={6} style={{ padding: 5 }}>
                                                        <Text>Title: {product.title}</Text>
                                                        <Text></Text>
                                                        <Text>Price: {product.price}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>
                    </>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
    },
    productText: {
        fontSize: 15,
        margin: 5,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FDAD2F',
        margin: 2,
        padding: 8,
    },
    productTile: {
        flex: 1,
        padding: 5,
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D7D7D7',
        borderRadius: 3,
        margin: 5
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
    },
    scrollView: {
        // marginHorizontal: 20
    }
});

export default Products;