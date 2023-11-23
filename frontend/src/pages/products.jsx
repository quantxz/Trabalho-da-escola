import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ActionsDiv } from '../components/login&registerForm/Login&Register/divs';
import { Title } from '../components/productsForm/texts';
import { Form } from "../components/productsForm/form"
import { Submit } from "../components/generalComponents/inputs"
import LabelAndInputProduct from '../components/productsForm/LabelAndInput';
import { AiFillShopping } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { TbFileDescription } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaShuttleVan } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";
import { MdBrandingWatermark } from "react-icons/md";
import { PiIntersectThreeThin } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Modal from '../components/modals/modal';
import axios from "axios";

function NovaAba(){
    const [productName, setProductName] = useState(null);
    const [productPrice, setProductPrice] = useState(null);
    const [productCategory, setProductCategory] = useState(null);
    const [productDescription, setProductDescription] = useState(null);
    const [productQuantity, setProductQuantity] = useState(null);
    const [productSupplier, setProductSupplier] = useState(null);
    const [productStatus, setProductStatus] = useState(null);
    const [productBrand, setProductBrand] = useState(null);
    const [productModel, setProductModel] = useState(null);
    const [modalState, setModalState] = useState(false)

    async function registerProduct(e) {
      try {
        e.preventDefault();
        const response = await axios.post('http://localhost:3001/register/product', {
          name: productName,
          price: productPrice,
          category: productCategory,
          description: productDescription,
          quantity: productQuantity,
          supplier: productSupplier,
          status: productStatus,
          brand: productBrand,
          model: productModel,
        });

        if (response.data.status === 200) {
          setModalState(true)
        }
      } catch (error) {
        console.log(error);
      }
    }
    const navigate = useNavigate();
    return (
      <>
      <FaHome 
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "0.9rem",
          left: "3.5rem",
          cursor: "pointer",
          fontSize: "3.2rem"
        }} color='#000'
      />
      <Modal isOpen={modalState} setModal={() => setModalState(!modalState)} content="Parabens, o produto foi cadastrado com sucesso"/>
        <ActionsDiv>
            <Title>
              Cadastre seus produtos
            </Title>
            <Form>
            <LabelAndInputProduct
            icon={<AiFillShopping color='#45b6fe' />}
            labelTitle="Nome do produto"
            inputPlaceHolder="Nome do produto"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <LabelAndInputProduct
            icon={<MdOutlineAttachMoney color='#45b6fe' />}
            labelTitle="Preço do produto"
            inputPlaceHolder="Preço do produto"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <LabelAndInputProduct
            icon={<BiSolidCategory color='#45b6fe' />}
            labelTitle="Categoria do produto"
            inputPlaceHolder="Categoria do produto"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          />
          <LabelAndInputProduct
            icon={<TbFileDescription color='#45b6fe' />}
            labelTitle="Descrição do produto"
            inputPlaceHolder="Descrição do produto"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <LabelAndInputProduct
            icon={<MdProductionQuantityLimits color='#45b6fe' />}
            labelTitle="Quantidade Estoque"
            inputPlaceHolder="Quantidade Estoque"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
          />
          <LabelAndInputProduct
            icon={<FaShuttleVan color='#45b6fe' />}
            labelTitle="Fornecedor do produto"
            inputPlaceHolder="Fornecedor do produto"
            value={productSupplier}
            onChange={(e) => setProductSupplier(e.target.value)}
          />
          <LabelAndInputProduct
            icon={<AiFillAlert color='#45b6fe' />}
            labelTitle="Status do Produto"
            inputPlaceHolder="Status do Produto"
            value={productStatus}
            onChange={(e) => setProductStatus(e.target.value)}
          />
            <LabelAndInputProduct 
            icon={<MdBrandingWatermark color='#45b6fe' />} 
            labelTitle="Marca do produto" 
            inputPlaceHolder="Marca do produto"
            value={productBrand}
            onChange={(e) => setProductBrand(e.target.value)}
            />
            <LabelAndInputProduct 
            icon={<PiIntersectThreeThin color='#45b6fe' />} 
            labelTitle="Modelo do produto" 
            inputPlaceHolder="Modelo do produto"
            value={productModel}
            onChange={(e) => setProductModel(e.target.value)}
            />
            <Submit onClick={(e) => registerProduct(e)}/>
            </Form>
        </ActionsDiv>
      </>
    );
};

export default NovaAba;