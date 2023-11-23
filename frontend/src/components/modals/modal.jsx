import { useState } from "react";
import { ModalBG, ModalDiv } from "./ModalBG";
import { IoIosClose } from "react-icons/io";

function Modal({ isOpen, setModal, content }) {

    if(isOpen) {
        return (
            <>
                <ModalBG> 
                    <ModalDiv>
                        <IoIosClose style={{ 
                            position: 'absolute', 
                            cursor: "pointer",
                            width: "1.5rem",
                            height: "2.5rem",
                            left: "1rem",
                            top: "0.2rem"
                        }} onClick={() => setModal(!isOpen)}  />
                        <p style={{
                            position: "absolute",
                            left: "2.5rem",
                            top: "3.5rem",
                            height: "7.5rem",
                            width: "7.5rem",
                            color: "white",    // Alterei a cor do texto para branco para melhor visibilidade
                            fontSize: "3rem",
                            border: "2px solid lightgreen",  // Adicione a borda desejada (alterei a largura para 2px)
                            background: "lightgreen",   // Adicione a cor de fundo desejada
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            boxSizing: "border-box",
                        }}>
                            &#10004;
                        </p>
                        <p style={{
                            position: "absolute",
                            left: "10rem",
                            top: "5rem"
                        }}>
                            <strong>{content}
                            </strong>
                        </p>
                    </ModalDiv>
                </ModalBG>
            </>
        )
    } 

    return null
}

export default Modal