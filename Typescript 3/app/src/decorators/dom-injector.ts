export function domInjector(selector: string){
    return function(target: any, propertyKey: string){
        console.log(`modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        let elemento: HTMLElement;
        const getter = function(){
            if(!elemento){
                elemento = <HTMLElement>document.querySelector(selector);
                console.log(`buscando elemento no DOM com o seletor ${selector} para injetar em ${propertyKey}`);
            }
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            {get: getter}
        )
    }
}