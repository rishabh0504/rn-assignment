import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import Loading from '../../components/loading';
import { API_ENDPOINT } from '../../constants/Config';
import { getApi } from '../../services/http-service';

function Home(props) {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const url = API_ENDPOINT + 'products';
            const products = await getApi(url) || [];
            setProducts(products);
            setLoading(false);
        }
        fetchProducts();
    }, [])

    useEffect(() => {
        async function fetchCategory() {
            const url = API_ENDPOINT + 'products/categories';
            const categories = await getApi(url) || [];
            setCategories(categories);
            setLoading(false);
        }
        fetchCategory();
    }, []);

    return (
        <>
            <View>
                {
                    loading && <Loading />
                }
                {
                    !loading && (
                        <>
                            <Text style={styles.categoryText}>Categories : </Text>

                            {
                                !Array.isArray(categories) && !loading && (

                                    <>
                                        <NotFound />
                                    </>
                                )
                            }
                            {
                                Array.isArray(categories) && categories.length === 0 && !loading && (
                                    <>
                                        <NotFound />
                                    </>
                                )
                            }
                            {
                                Array.isArray(categories) && categories.length !== 0 && !loading && (
                                    <View style={styles.categoryContainer}>
                                        {
                                            Array.isArray(categories) && (
                                                categories.map((item, index) => {
                                                    return (
                                                        <TouchableOpacity
                                                            style={styles.button}
                                                            onPress={() => { }}
                                                            key={index}
                                                        >
                                                            <Text> {item} </Text>
                                                        </TouchableOpacity>
                                                    )
                                                })

                                            )
                                        }
                                    </View>
                                )
                            }

                        </>
                    )
                }
            </View>

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
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    },
    buttonContainer: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
    productContainer: {
        flex: 1,
    },
    productText: {
        fontSize: 15,
        margin: 5,
        fontWeight: 'bold'
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
    },
    categoryContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 2,
        alignContent: 'flex-start',
        flexWrap: 'wrap',
    },
    categoryText: {
        fontSize: 15,
        margin: 5,
        fontWeight: 'bold',
        color: 'gray'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FDAD2F',
        margin: 2,
        padding: 8,
    }

})

export default Home