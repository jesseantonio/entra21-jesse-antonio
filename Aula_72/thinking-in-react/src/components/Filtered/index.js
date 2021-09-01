import React from "react";

class ProductCategoryRow extends React.Component {
    render() {
      const category = this.props.category;
      return /*#__PURE__*/(
        React.createElement("tr", null, /*#__PURE__*/
        React.createElement("th", { colSpan: "2" },
        category)));
  
  
  
    }}
  
  
  class ProductRow extends React.Component {
    render() {
      const product = this.props.product;
      const name = product.stocked ?
      product.name : /*#__PURE__*/
      React.createElement("span", { style: { color: 'red' } },
      product.name);
  
  
      return /*#__PURE__*/(
        React.createElement("tr", null, /*#__PURE__*/
        React.createElement("td", null, name), /*#__PURE__*/
        React.createElement("td", null, product.price)));
  
  
    }}
  
  
  class ProductTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
      let lastCategory = null;
  
      this.props.products.forEach(product => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push( /*#__PURE__*/
          React.createElement(ProductCategoryRow, {
            category: product.category,
            key: product.category }));
  
        }
        rows.push( /*#__PURE__*/
        React.createElement(ProductRow, {
          product: product,
          key: product.name }));
  
  
        lastCategory = product.category;
      });
  
      return /*#__PURE__*/(
        React.createElement("table", null, /*#__PURE__*/
        React.createElement("thead", null, /*#__PURE__*/
        React.createElement("tr", null, /*#__PURE__*/
        React.createElement("th", null, "Name"), /*#__PURE__*/
        React.createElement("th", null, "Price"))), /*#__PURE__*/
  
  
        React.createElement("tbody", null, rows)));
  
  
    }}
  
  
  class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
  
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
  
    handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
  
    render() {
      return /*#__PURE__*/(
        React.createElement("form", null, /*#__PURE__*/
        React.createElement("input", {
          type: "text",
          placeholder: "Search...",
          value: this.props.filterText,
          onChange: this.handleFilterTextChange }), /*#__PURE__*/
  
        React.createElement("p", null, /*#__PURE__*/
        React.createElement("input", {
          type: "checkbox",
          checked: this.props.inStockOnly,
          onChange: this.handleInStockChange }),
  
        ' ', "Only show products in stock")));
  
  
  
  
    }}
  
  
  export class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false };
  
  
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
  
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText });
  
    }
  
    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly });
  
    }
  
    render() {
      return /*#__PURE__*/(
        React.createElement("div", null, /*#__PURE__*/
        React.createElement(SearchBar, {
          filterText: this.state.filterText,
          inStockOnly: this.state.inStockOnly,
          onFilterTextChange: this.handleFilterTextChange,
          onInStockChange: this.handleInStockChange }), /*#__PURE__*/
  
        React.createElement(ProductTable, {
          products: this.props.products,
          filterText: this.state.filterText,
          inStockOnly: this.state.inStockOnly })));
  
  
  
    }}
  
  
  
  