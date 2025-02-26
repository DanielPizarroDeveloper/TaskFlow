export const NotificacionesTareas = () => {
    let success = [];
    let successDelete = [];
    let danger = [];
    let dangerDelete = [];

    success[0] = 'Tarea creada exitosamente';
    success[1] = 'Tu nueva tarea ha sido agregada correctamente. 🎉';

    successDelete[0] = 'Tarea eliminada correctamente';
    successDelete[1] = 'La tarea ha sido eliminada con éxito. 🗑️';

    danger[0] = 'Error al crear la tarea';
    danger[1] = 'Ocurrió un problema al intentar agregar tu tarea. Por favor, inténtalo nuevamente. 🚨';

    dangerDelete[0] = 'Error al eliminar la tarea';
    dangerDelete[1] = 'Ocurrió un problema al intentar eliminar tu tarea. Por favor, inténtalo nuevamente. 🚨';

    return {success, successDelete, danger, dangerDelete};
}

export const NotificacionesProyecto = () => {
    let success = [];
    let successUpdate = [];
    let successDelete = [];

    let warning = [];

    let danger = [];
    let dangerUpdate = [];
    let dangerDelete = [];

    success[0] = 'Proyecto creado exitosamente';
    success[1] = 'Tu proyecto ha sido agregado correctamente. 🎉';

    successUpdate[0] = 'Proyecto actualizado exitosamente';
    successUpdate[1] = 'La descripción de tu proyecto se ha actualizado correctamente. 🎉';

    successDelete[0] = 'Proyecto eliminado existosamente';
    successDelete[1] = 'Se ha eliminado el proyecto correctamente. 🎉';

    warning[0] = 'Proyecto previamente registrado';
    warning[1] = 'El proyecto que esta creando ya existe en los registros. Por favor, ingresar otro nombre a su proyecto. 🔄';

    danger[0] = 'Error al crear el proyecto';
    danger[1] = 'Ocurrió un problema al intentar agregar tu proyecto. Por favor, inténtalo nuevamente. 🚨';

    dangerDelete[0] = 'Error al eliminar el proyecto';
    dangerDelete[1] = 'Ocurrió un problema al intentar eliminar tu proyecto. Por favor, inténtalo nuevamente. 🚨';

    dangerUpdate[0] = 'Error al actualizar el proyecto';
    dangerUpdate[1] = 'Ocurrió un problema al intentar actualizar la descripción. Por favor, inténtalo nuevamente. 🚨';

    return {success, successUpdate, successDelete, warning, danger, dangerUpdate, dangerDelete };
}

export const NotificacionesUsuario = () => {
    let dangerGoogle = [];
    let dangerAccount = [];

    dangerGoogle[0] = 'Error de autenticación con Google';
    dangerGoogle[1] = 'Hubo un problema al intentar iniciar sesión con Google. Por favor, verifica tu conexión e inténtalo nuevamente. 🚀';

    dangerAccount[0] = 'Error de autenticación';
    dangerAccount[1] = 'Hubo un problema al iniciar sesión. Verifica tus credenciales e inténtalo nuevamente. Si el problema persiste, restablece tu contraseña o contacta al soporte. 🔄';

    return {dangerGoogle, dangerAccount}
}

export const NotificacionesCreacionCuenta = () => {
    let warningAccount = [];
    let dangerAccount = [];

    warningAccount[0] = 'Cuenta ya registrada';
    warningAccount[1] = 'El correo ingresado ya está asociado a una cuenta. Inicia sesión o usa otra dirección de correo. 🔄';

    dangerAccount[0] = 'Error al crear la cuenta';
    dangerAccount[1] = 'Ocurrió un problema inesperado y no se pudo completar el registro. Inténtalo nuevamente más tarde. 🔄';

    return{warningAccount, dangerAccount}
}