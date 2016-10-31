function SortByDisplayOrder(first, second) {
    var firstDisplayOrder = first.DisplayOrder;
    var secondDisplayOrder = second.DisplayOrder;
    return firstDisplayOrder < secondDisplayOrder
                ? -1 
                : firstDisplayOrder > secondDisplayOrder
                    ? 1
                    : 0;
}
