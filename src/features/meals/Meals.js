import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {IoGridOutline,IoLocationOutline} from "react-icons/io5";
import {FaWhatsapp,FaMobileAlt} from 'react-icons/fa'
import { onSnapshot } from 'firebase/firestore'
import { mealsSuccess } from './mealSlice'
import { docRef } from '../../utils/firebase/firebaseFunctions';
import styles from './meals.module.css'

const Meals = () => {

    const dispatch = useDispatch();

    const meals = useSelector((state) => state.meals.meals);

    // get data from collection

    useEffect(() => {
        onSnapshot(docRef, (doc) => {
            let mealsArray = []
            for (let i = 0; i < 14; i++) {
                mealsArray.push(doc.data())
            }
            dispatch(mealsSuccess(mealsArray));
        })
    }, [dispatch])


    return (
        <>
        <ul className={styles.meals}>
            {
                meals.map((meal, index) => (
                    <li key={index} className={styles.meal}>
                        <div className={styles.imageBadge}>
                        <span className={styles.priceBadge}>QAR{meal.price}</span>
                        <img src={meal.image} alt="meal" className={styles.mealImg} />
                        </div>
                        <span className={styles.mealName}>{meal.name}</span>
                        <button className={styles.addCart}><AiOutlineShoppingCart/> add to cart</button>
                    </li>
                ))
            }
        </ul>
        <nav>
<ul className={styles.downNav}>
    <li>
       <a href="#"><IoGridOutline/></a> 
    </li>
    <li>
    <a href="#"><FaMobileAlt/></a>  
    </li>
    <li>
    <a href="#"><AiOutlineShoppingCart/></a>  
    </li>
    <li>
    <a href="#"><FaWhatsapp/></a> 
    </li>
    <li>
    <a href="#"><IoLocationOutline/></a> 
    </li>
</ul>
        </nav>
        </>
    )
}

export default Meals;