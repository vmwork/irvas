import checkNumInputs from './checkNumInputs';

const changeModalState = (state) =>{
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeigth = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

        checkNumInputs('#width');
        checkNumInputs('#height ');

        function bindActionToElements(event, elem, prop){
            elem.forEach((item, i) => {
                item.addEventListener(event, () =>{
                    switch(item.nodeName){
                        case 'SPAN' :
                            state[prop] = i;
                            break;
                        case 'INPUT' :
                            if (item.getAttribute('type') === 'checkbox'){
                                i === 0 ? state[prop] = "Холодное" : state[prop] = "Тёплое";
                                elem.forEach((box, j) => {
                                    box.checked = false;
                                    if (i === j) {
                                        box.checked = true; 
                                    }
                                })
                            } else {
                                state[prop] = item.value;
                            };
                            break;
                        case 'SELECT' :
                            state[prop] = item.value;
                            break;
                    }
                    
                    
                });
                
            });
        }
        bindActionToElements('click', windowForm, 'form');
        bindActionToElements('input', windowWidth, 'width');
        bindActionToElements('input', windowHeigth, 'heigth');
        bindActionToElements('change', windowType, 'type');
        bindActionToElements('change', windowProfile, 'profile');

        
}

export default changeModalState;