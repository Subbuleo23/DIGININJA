/// <reference types="knockout"/>
/// <reference types="rx"/>

interface KnockoutSubscribableFunctions<T> {
    toObservable(event?: string): Rx.Observable<T>;
    toObservable<TEvent>(event: string): Rx.Observable<TEvent>;
}

interface KnockoutObservableFunctions<T> {
    toObservableWithReplyLatest(): Rx.Observable<T>;
    toSubject(): Rx.ISubject<T>;
}

interface KnockoutComputedFunctions<T> {
    toObservableWithReplyLatest(): Rx.Observable<T>;
}

declare namespace Rx {
    interface Observable<T> {
        toKoSubscribable(): KnockoutSubscribable<T>;
        toKoObservable(initialValue?: T): KnockoutObservable<T>;
    }

    interface Subject<T> {
        toKoObservable(initialValue?: T): KnockoutObservable<T>;
    }
}
