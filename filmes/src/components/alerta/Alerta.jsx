import "./Alerta.css"
import Swal from "sweetalert2"

export const Alerta = ({
        title, 
        text,
        icon,
        showCancelButton = null,
        confirmButtonText = null,
        cancelButtonText = null,
        confirmButtonColor = "#3085d6",
        cancelButtonColor = "#d33",
        }) => {
    return Swal.fire({
                title: title,
                text: text,
                icon: icon,
                showCancelButton: showCancelButton,
                confirmButtonText: confirmButtonText,
                cancelButtonText: cancelButtonText,
                confirmButtonColor: confirmButtonColor,
                cancelButtonColor: cancelButtonColor

                // OU
                // title,
                // text,
                // icon,
                // showCancelButton,
                // confirmButtonText,
                // cancelButtonText,
                // confirmButtonColor,
                // cancelButtonColor
                //
            })
}

//UM BOTÃO
// Swal.fire({
//     title:"Exclusão de Gênero",
//     text:"Apagada com sucesso",
//     icon:"success"
// })

//DOIS BOTÕES
// Swal.fire({
//     title:"Exclusão de Gênero",
//     text:"Apagada com sucesso",
//     icon:"success"
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it",
//     cancelButtonText: "Cancelar"
// })