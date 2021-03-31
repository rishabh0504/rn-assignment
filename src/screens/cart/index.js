import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import Loading from '../../components/loading';
import { API_ENDPOINT, userId } from '../../constants/Config';
import { getApi } from '../../services/http-service';
import NotFound from '../../components/not-found';

function Cart() {

    const [loading, setLoading] = useState(true);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        async function fetchCartData() {
            const url = API_ENDPOINT + `carts/user/${userId}`;
            const cartData = await getApi(url) || [];
            setCartData(cartData);
            setLoading(false);
        }
        fetchCartData();
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.productContainer}>
                {
                    loading && <Loading />
                }
                {
                    !loading && (
                        <>
                            <ScrollView style={styles.scrollView}>
                                <View>
                                    {
                                        cartData && cartData.map((cart, index) => {
                                            return (
                                                <View style={styles.cartTile}>
                                                    <View flex={6} style={{ padding: 5 }}>
                                                        <Text>Cart id: {cart.id}</Text>
                                                        <Text></Text>
                                                        <Text>userId: {cart.userId}</Text>
                                                    </View>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productContainer: {
        flex: 1,
    },
    productContainer: {
        flex: 1,
    },
    cartText: {
        fontSize: 15,
        margin: 5,
        fontWeight: 'bold'
    },
    cartTile: {
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
})

export default Cart;
