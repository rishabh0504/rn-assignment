import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { API_ENDPOINT } from '../../constants/Config';
import { getApi } from '../../services/http-service';
import Loading from '../loading';
import NotFound from '../not-found';

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchCategory() {
            const url = API_ENDPOINT + 'products/categories';
            const categories = await getApi(url) || [];
            setCategories(categories);
            setLoading(false);
        }
        fetchCategory();
    }, [])
    return (
        <View>
            {
                loading && <Loading />
            }
            {
                !loading && (
                    <>
                        <Text style={styles.categoryText}>Categories : </Text>

                        {
                            !Array.isArray(categories) && (

                                <>
                                    <NotFound />
                                </>
                            )
                        }
                        {
                            Array.isArray(categories) && (
                                <>
                                    <NotFound />
                                </>
                            )
                        }
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
                    </>
                )
            }
        </View>
    )
}
const styles = StyleSheet.create({
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
});

export default Category;