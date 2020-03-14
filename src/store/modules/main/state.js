const state = {
    loading: true,
    isActions: true,
    calculationObject: {
        idActionType: null,
        actionName: null,
        idSubjectType: null,
        arrayAction: [],
        idUrgency: 1,
        nameUrgency: null,
    },
    titleAction: 'Выберите действие',
    titleSubject: 'От имени кого подается заявление',
    titleInfo:'Справочная информация:',
    buttonInfoAction: [],
    buttonInfoSubject: [],
    itemInfo: [
        {
            name: 'Указ президента №200',
            href: '#'
        },
        {
            name: 'Постановление',
            href: '#'
        }
    ]
};
export default state