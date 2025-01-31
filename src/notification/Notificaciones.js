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
    let danger = [];

    success[0] = 'Proyecto creado exitosamente';
    success[1] = 'Tu proyecto ha sido agregado correctamente. 🎉';

    danger[0] = 'Error al crear el proyecto';
    danger[1] = 'Ocurrió un problema al intentar agregar tu proyecto. Por favor, inténtalo nuevamente. 🚨';

    return {success, danger};
}

export const NotificacionesUsuario = () => {

}