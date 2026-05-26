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
                showCancelButton: showCancelButton != null ? showCancelButton: undefined,
                confirmButtonText: confirmButtonText != null ? confirmButtonText: undefined,
                cancelButtonText: cancelButtonText != null ? cancelButtonText: undefined,
                confirmButtonColor,
                cancelButtonColor,
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